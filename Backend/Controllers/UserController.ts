import mongoose from "mongoose";
import { Request, Response } from "express";
import Users from "@Models/UserModel"

const registerUser = async (req : Request, res :Response)=>
{
    try
    {
        const {firstName, lastName,email,password} = req.body as {firstName : string, lastName : string, email : string,password : string};
        const newUser = new Users({firstName,lastName,email,password});
        await newUser.save();
        res.status(201).json({success:true,data:newUser,message:"User created successfully"});
    }
    catch(error)
    {
        res.status(500).json({ success:false, error: "Failed to create user" });
    }
}

const loginUser = async (req : Request, res :Response)=>
{
    try
    {
        const {email,password} = req.body as {email : string,password : string};
        const user = await Users.findOne({email});
        if(!user || user.password !== password)
        {
            return res.status(404).json({ success:false, error: "Invalid Email or password" });
        }
        res.status(200).json({success:true,data:user,message:"User logged in successfully"});
    }
    catch(error)
    {
        res.status(500).json({ success:false, error: "Failed to login user" });
    }
}

export {registerUser,loginUser}
