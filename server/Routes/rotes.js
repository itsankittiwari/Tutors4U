const express = require('express');
const router = express.Router();

const {userRegister} = require('../Controller/userRegister');

const {LoginController} = require('../Controller/login');



router.post('/register',userRegister);
router.post('/login',LoginController);


module.exports = router;