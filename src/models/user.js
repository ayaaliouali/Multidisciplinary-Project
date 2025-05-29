import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name :{
       type : String,
       required : true,
       validate: {
      validator: function (value) {
        return value.length > 3 && value.length < 20;
      },
      message: "Name must be between 4 and 19 characters."
    }
  },
  email :{
       type : String,
       required : true,
       unique : true,
         validate: {
      validator: function (value) {
        return value.includes("@");
      },
      message: "Email must include @ symbol."
    }
  },
    password :{
        type : String,
        required : true,
    
    },
     role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }

});
const User = mongoose. model("User", userSchema);
export default User;