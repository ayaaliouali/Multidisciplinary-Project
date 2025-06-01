import Message from "../models/message.model.js";
import User from "../models/User.js";
import cloudinary from "../lib/cloudinary.js";
import { getSocketIO } from "../socket.js";


export async function  getUsersForSidebar (req,res){
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar:",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export async function getMessages (req,res){
    try {
        const { id:userToChatId } = req.params;
        const myId = req.user._id;

  const messages = await Message.find({
    $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId }
    ]
});
        res.status(200).json(messages);  
    } catch (error) {
        console.log("Error in getMessages:",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export async function sendMessages(req,res) {

    try {
 const { text,image } = req.body;
 const { id: receiverId} = req.params;
 const senderId = req.user._id;
 let imageUrl;
if(image){ 
    //cloudinary thti fih image yrdhalk url
    const uploadResponse = await cloudinary.uploader.upload(image);
    imageUrl = uploadResponse.secure_url;
}  
    
            const newMessage = new Message({
                senderId,
                receiverId,
                text,
                image:imageUrl
            });
    
            await newMessage.save();

            // todo:realtime functionality goes here => socket.io

            const io = getSocketIO();
    const roomId = [senderId.toString(), receiverId.toString()].sort().join("-");
    io.to(roomId).emit("newMessage", newMessage);
    
            res.status(200).json(newMessage);      
    } catch (error) {
        console.log("Error in sendMessage:",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}