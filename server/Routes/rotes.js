import { Router } from "express";
// const express = require('express');
// import express from 'express';

import {upload} from "../middlewares/multer.middleware.js"


// const {userRegister} = require('../Controller/userRegister');
import {userRegister} from '../Controller/userRegister.js'
// const {LoginController} = require('../Controller/login');
import {LoginController} from '../Controller/login.js'

import {TutorRegisteration} from '../Controller/Teacher.Register.js'

const router = Router()

router.route('/TeacherRegister').post(upload.fields([
    {
        name:"teacherProfile",
        maxCount:1,
    }

    // {
    //     name:"coverImage",
    //     maxCount:1
    // }

]), TutorRegisteration)



router.post('/register',userRegister);
router.post('/login',LoginController);


export default router
