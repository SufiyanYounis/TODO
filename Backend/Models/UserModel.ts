import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        firstName:
        {
            type:String,
            required:true
        },
        lastName:
        {
            type:String,
            required:true
        },
        email:
        {
            type:String,
            required:true,
            unique:true
        },
        password:
        {
            type:String,
            required:true,
            minLength:8,
            match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        },
    
    }
)
export default mongoose.model("User",userSchema)