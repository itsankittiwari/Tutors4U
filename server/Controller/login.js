import {Register} from '../models/registration.js'

// const userData = require('../models/registration');

const LoginController = async(req,res) =>{
    const {email,password} =req.body;

    const user = await Register.findOne({email:email});

    if(user){
         if(user.password === password){
            res.json("Success")
         }
         else{
            res.json("the Password is incorrect")
         }
    }
    else{
        res.json("No Records Found")
    }
}

export {LoginController}