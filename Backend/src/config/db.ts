import mongoose from "mongoose"
import dotenv from "dotenv"
import { createLogger } from "vite"
dotenv.config()
export const connectDB =async ()  =>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL || "")       
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } 
    catch (error) 
    {
        
        console.log(error)
    }
}