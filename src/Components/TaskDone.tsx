import React from "react";
import TaskCount from "./TaskCount";

const TaskDone = () => {
 
  return (
    <div className="TaskDiv">
      <div className="MidTaskDiv">
        <div className="task-info">
          <p id="MainTaskText">Task Done</p>
          <p id="TaskText">Keep it up</p>
        </div>
        <TaskCount />
      </div>
    </div>
  );
};

export default TaskDone;
