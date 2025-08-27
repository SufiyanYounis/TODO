import mongoose from "mongoose";
import { Request, Response } from "express";
import Tasks from "@Models/TaskModel"
import { Error } from "mongoose";

const createTask = async (req : Request, res :Response)=>
{
    try {
        const { text, userId } = req.body as { text: string; userId: string };
    
        // create the task with both fields
        const newTask = new Tasks({
          text,
          userId,  // 👈 required by your schema
          completed: false, // optional if your schema has default
        });
    
        await newTask.save();
        res.status(201).json({success : true, message:" task created successfully"});
      } catch (error: unknown) {
        console.log(error);
        res.status(500).json({ error: "Failed to create task" });
      }
}

const getTasks = async (_:Request, res :Response)=>
{
    try
    {
        const tasks = await Tasks.find();
        res.status(200).json({success:true,data:tasks,message:"Tasks fetched successfully"});
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({ success:false, error: "Failed to get tasks" });
    }
}

const updateTask = async (req : Request, res :Response) =>
{
    const id = req.params.id;
    const newText = req.body.text;
    try{
        if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({ error: "Invalid task ID" });
        }
        const updatedTask = await Tasks.findByIdAndUpdate(id,{text:newText},{new:true})
        res.status(200).json({success:true,data:updatedTask,message:"Task updated successfully"})
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({ success:false, error: "Failed to update task" });
    }
}


const deleteTask = async (req : Request, res :Response) =>
    {
        const id = req.params.id;
        try{
            if(!mongoose.Types.ObjectId.isValid(id))
            {
                return res.status(404).json({ error: "Invalid task ID" });
            }
            await Tasks.findByIdAndDelete(id)
            res.status(200).json({success:true,message:"Task delete successfully"})
        }
        catch(error)
        {
            console.log(error)
            res.status(500).json({ success:false, error: "Failed to delete task" });
        }
    }


export {createTask,getTasks,updateTask,deleteTask}