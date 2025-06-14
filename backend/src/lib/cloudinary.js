import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";
dotenv.config();

try{
  console.log("Cloudinary Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);

  cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

} catch (err){
  console.log("Error in uploading at cloudinary:", err);
}
export default cloudinary;
