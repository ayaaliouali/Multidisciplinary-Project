import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name :{
       type : String,
       requirerd : true,
       validator : function(value){
              return value.lentgh > 3 && value.length < 20;
       }
  },
  email :{
       type : String,
       requirerd : true,
       unique : true,
         validator : function (value){
                return value.includes("@");
         }
  },
    password :{
        type : String,
        requirerd : true,
    
    }
});
const User = mongoose. model("User", userSchema);
export default User;