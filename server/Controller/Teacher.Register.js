import { TeacherRegister } from '../models/TeacherRegister.model.js'
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';


exports.userRegister = async (req, res) => {
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
        throw new ApiError(400, "Avatar file is required")
    }

    // upload them to cloudinary , avatar 
    const avatar = await uploadOnCloudinary(teacherProfileImgPath)

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
        description,
        teacherProfile: avatar.url
    });

    
  return res.status(201).json(
    new ApiResponse(200, response, "User registered Successfully")
)
}