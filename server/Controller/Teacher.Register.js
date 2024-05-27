import { TeacherRegister } from '../models/TeacherRegister.model.js'
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';


const TutorRegisteration = async (req, res) => {
    // gets user details from frontend 
    // validation  _ not empty
    // check if user already exists: username, email
    // check for images , check for avatar 
    // upload them to cloudinary , avatar 
    // create user object  - create entry in db 
    // remove password and refresh token field from response 
    // check for user creation 
    // return res  
    const { firstname, lastname, email, password, LangaugeSpoken, self_level, subjectTaught, contact, description, teacherProfile } = req.body;

    //check all the rewquired feilds and ensure that any required filed are not empty
    if ([firstname, lastname, email, password, contact, subjectTaught, teacherProfile].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required ");
    }

    // check if user already exists: username, email

    const existedUser = await TeacherRegister.findOne({ email: email });

    if (existedUser) {
        throw new ApiError(409, "User with email already exists");
    }

    //multer gives the file access like express give us req.body 
    const teacherProfileImgPath = req.files?.teacherProfile[0]?.path;

    if (!teacherProfileImgPath) {
        throw new ApiError(400, "profileImage file is required")
    }

    // upload them to cloudinary , avatar 
    const avatar = await uploadOnCloudinary(teacherProfileImgPath)
    console.log(avatar)
   

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }


    const response = await TeacherRegister.create({
        firstname,
        lastname,
        email,
        password,
        LangaugeSpoken,
        self_level,
        subjectTaught,
        contact,
        description ,
        teacherProfile: avatar.url
    });

    
  return res.status(201).json(
    new ApiResponse(200, response, "User registered Successfully")
)
}


export {TutorRegisteration}
// import { TeacherRegister } from '../models/TeacherRegister.model.js';
// import { ApiError } from '../utils/ApiError.js';
// import { ApiResponse } from '../utils/ApiResponse.js';
// import { uploadOnCloudinary } from '../utils/cloudinary.js';
// // import express from "express";

// // const app = express();

// // // Middleware to handle JSON bodies
// // import bodyParser from 'body-parser';
// // app.use(bodyParser.json());

// // Middleware to handle file uploads (example using multer)
// // import multer from 'multer';
// // const upload = multer({ dest: 'uploads/' });
// // app.use(upload.fields([{ name: 'teacherProfile', maxCount: 1 }]));

// const TutorRegisteration = async (req, res, next) => {
//     try {
//         // Log the incoming request body and files for debugging
//         console.log("Request Body: ", req.body);
//         console.log("Request Files: ", req.files);

//         const { firstname, lastname, email, password, LangaugeSpoken, self_level, subjectTaught, contact, description } = req.body;

//         // Check all required fields and ensure that any required field is not empty
//         if ([firstname, lastname, email, password, contact, subjectTaught].some((field) => !field || field.trim() === "")) {
//             throw new ApiError(400, "All fields are required");
//         }

//         // Check if user already exists: email
//         const existedUser = await TeacherRegister.findOne({ email });

//         if (existedUser) {
//             throw new ApiError(409, "User with email already exists");
//         }

//         // Multer gives the file access like express gives us req.body
//         const teacherProfileImgPath = req.files?.teacherProfile[0]?.path;

//         if (!teacherProfileImgPath) {
//             throw new ApiError(400, "Profile image file is required");
//         }

//         // Upload to Cloudinary
//         const avatar = await uploadOnCloudinary(teacherProfileImgPath);

//         if (!avatar || !avatar.url) {
//             throw new ApiError(400, "Failed to upload avatar to Cloudinary");
//         }

//         // Create user object and save in database
//         const response = await TeacherRegister.create({
//             firstname,
//             lastname,
//             email,
//             password,
//             LangaugeSpoken,
//             self_level,
//             subjectTaught,
//             contact,
//             description,
//             teacherProfile: avatar.url,
//         });

//         // Remove sensitive fields from response
//         const responseData = response.toObject();
//         delete responseData.password;

//         return res.status(201).json(new ApiResponse(201, responseData, "User registered successfully"));
//     } catch (error) {
//         if (error instanceof ApiError) {
//             return res.status(error.statusCode).json({ message: error.message });
//         }
//         // Handle unexpected errors
//         next(error);
//     }
// };

// export { TutorRegisteration };
