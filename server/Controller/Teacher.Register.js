const teacher_data = require('../models/TeacherRegister.model.js')



exports.userRegister = async(req,res) =>{
    try{
        const {firstname,lastname,email,password,LangaugeSpoken,self_level,subjectTaught,contact,description,teacherProfile} = req.body;

        const response = await teacher_data.create({firstname,lastname,email,password,LangaugeSpoken,self_level,subjectTaught,contact,description,teacherProfile});

        res.status(200).json({
            success:true,
            data:response,
            message:'Entry Created Successfully'
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:'internal server error',
            message:err.message,
        })
    }
}