const mongoose = require('mongoose');


const registrationSchema = new mongoose.Schema(
    {
        first_name:{
            type:String,
            required:true,
            maxLength:50,
        },
        last_name:{
            type:String,
            required:true,
            maxLength:50,
        },
        email:{
            type:String,
            required:true,
            maxLength:50,
        },

        password:{
            type:String,
            required:true,
            maxLength:10,
        },

        confirm_password:{
            type:String,
            required:true,
            maxLength:10,
        },

        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
)

module.exports = mongoose.model("register",registrationSchema);