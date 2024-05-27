import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import {userRegister} from '../Controller/userRegister.js'
import {LoginController} from '../Controller/login.js'

import {TutorRegisteration} from '../Controller/Teacher.Register.js'

const router = Router()

router.post('/TeacherRegister', upload.fields([{ name: 'teacherProfile', maxCount: 1 }]), TutorRegisteration);



router.post('/register',userRegister);
router.post('/login',LoginController);


export default router
