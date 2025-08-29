// models/Task.js
import mongoose  from "mongoose";

const taskSchema = new mongoose.Schema({

  text: 
  {
    type: String,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: 'User',
    required: false
  }
},{timestamps:true});

export default mongoose.model('Task', taskSchema);