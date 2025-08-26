import express from "express";
import { connectDB } from "./src/config/db.ts";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.get("/" , (_,res)=>
{
    res.send("Todo APP")
});
app.listen(3000,()=>
{
    connectDB();
    console.log("Server is running on port 3000");
})