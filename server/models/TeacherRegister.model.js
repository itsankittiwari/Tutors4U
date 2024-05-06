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
            required:true
        },
        self_level:{
            type: String,
            required:true
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
            type:Number,
            
        },
        teacherProfile:{
            type:String //cloudinary url se aayega

        },





    },
    { timestamps: true })


export const TeacherRegister = mongoose.model("TeacherRegister",teacherRegisterSchema);