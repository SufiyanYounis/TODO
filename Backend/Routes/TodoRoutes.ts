import express from "express";
import {createTask,getTasks,updateTask,deleteTask,toggleTask} from "@Controllers/TaskController"
const router = express.Router();
router.post("/todo",createTask);
router.get("/todo",getTasks);
router.put("/todo/:id",updateTask);
router.patch("/todo/:id/toggle",toggleTask)
router.delete("/todo/:id",deleteTask);
export default router;


