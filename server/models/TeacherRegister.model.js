const mongoose = require('mongoose');

const teacherRegisterSchema = new mongoose.Schema(
    {

        firstname: {
            type: String,
            required:true
        },
        lastname: {
            type: String,
            required:true
        },
        email:{
            type: String,
            required:true
        },
        password:{
            type: String,
            required:true
        },
        LangaugeSpoken:{
            type: String,
       
        },
        self_level:{
            type: String,
          
        },
        subjectTaught:{
            type: String,
            required:true
        },
        contact:{
            type:Number,
            required:true,
        },
        description:{
            type:String,
            
        },
        teacherProfile:{
            type:String, //cloudinary url se aayega
            required:true,
        },





    },
    { timestamps: true })


export const TeacherRegister = mongoose.model("TeacherRegister",teacherRegisterSchema);