import {Register} from '../models/registration.js'
// const Register = require('../models/registration');


const userRegister = async(req,res) =>{
    try{
        const {first_name,last_name,email,password,confirm_password} = req.body;

        const response = await Register.create({first_name,last_name,email,password,confirm_password});

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

export {userRegister}