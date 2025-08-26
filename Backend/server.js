import express from "express";
import { connectDB } from "./src/config/db.ts";
const app = express();
app.get("/" , (_,res)=>
{
    res.send("Todo APP")
});
app.listen(3000,()=>
{
    connectDB();
    console.log("Server is running on port 3000");
})