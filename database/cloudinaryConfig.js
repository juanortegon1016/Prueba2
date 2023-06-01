import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "duimlfme0",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: false,
});

const uploadImage = async (imagePath) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {

    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.public_id;

  } catch (error) {
    
    console.error(error);
  }
};
