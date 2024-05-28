import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

import dotenv from "dotenv"
dotenv.config({
  path: './.env'
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log(process.env.CLOUDINARY_API_KEY)
//here we upload the file as we want 
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.error("Local file path is not provided.");
      return null;
    }
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    })

    // file has been uploaded successfull
    console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath)
    return response;
    
  }
  catch (error) {
    console.error("Cloudinary Upload Error:", error.message);
    console.error("Error Stack:", error.stack);

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    //remove the local saved temporary file as the ulpoad operation got failed 
    return null;
  }
};


export { uploadOnCloudinary };