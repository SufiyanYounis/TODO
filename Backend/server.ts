import express from "express";
import { connectDB } from "./config/db";
import cors from "cors";
import TaskRoutes from "@Routes/TodoRoutes";
import UserRoutes from "@Routes/UserRoutes";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/",TaskRoutes);
app.use("/",UserRoutes);

app.listen(3000,()=>
{
    connectDB();
    console.log("Server is running on port 3000");
})