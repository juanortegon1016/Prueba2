import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const DBconnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log("DB")
    } catch (error) {
        console.log(error)
        throw new Error ("Error")
    }
} 

export {DBconnection}