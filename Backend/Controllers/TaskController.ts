import { Request, Response } from "express";

import Tasks from "../Models/TaskModel";

const createTask = async (req : Request, res :Response)=>
{
    try
    {
        const {text} = req.body as {text : string};
        const newTask = new Tasks({text});
        await newTask.save();
        res.status(201).json(newTask);
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({ error: "Failed to create task" });
    }
}
