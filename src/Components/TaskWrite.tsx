import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@Features/TaskSlice";
import AddTaskButtonSvg from "@assets/icons/AddTaskButtonSvg";

export const TaskWrite = () => {


  const [text, setText] = useState("");

  const dispatch= useDispatch()
  const handleAddClick = () => 
    {
      dispatch(addTask({id:Date.now(), done:false, text:text}))
      setText("") // this set Text is null bcoz on every add Task, the Input field to write text will set to NULL
    };
    
  return (
    <div className="Taskwrite">
      <input
        type="text"
        className="InputText"
        placeholder="write your next task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="addTaskButton"
        onClick={handleAddClick}
        disabled={text.trim() === ""}
        style={{ opacity: text.trim() === "" ? 0.5 : 1 ,cursor: text.trim() === "" ? "not-allowed" : "pointer"}}
      >
        <AddTaskButtonSvg />
      </button>
    </div>
  );
};
export default TaskWrite;
