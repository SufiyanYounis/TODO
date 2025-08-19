
import React, { useState } from "react";
import AddTaskButtonSvg from "../assets/icons/AddTaskButtonSvg";
type AddButtonProps = {
  onAddTotalTask: (text: string) => void;
};
export const TaskWrite = (props: AddButtonProps) => {
  const [text, setText] = useState("");
  const handleAddClick = () => {
    props.onAddTotalTask(text);
    setText("");
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
      >
        <AddTaskButtonSvg />
      </button>
    </div>
  );
};
export default TaskWrite;
