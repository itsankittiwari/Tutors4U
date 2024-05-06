const users_data = require('../models/registration');


exports.userRegister = async(req,res) =>{
    try{
        const {first_name,last_name,email,password,confirm_password} = req.body;

        const response = await users_data.create({first_name,last_name,email,password,confirm_password});

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