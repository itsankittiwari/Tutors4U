const userData = require('../models/registration');

exports.LoginController = async(req,res) =>{
    const {email,password} =req.body;

    const user = await userData.findOne({email:email});

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