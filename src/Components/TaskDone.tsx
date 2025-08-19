import React from "react";
import TaskCount from "./TaskCount";
type TaskCountProps = {
  doneCount: number;
  totalCount: number;
};
const TaskDone = (props: TaskCountProps) => {
  return (
    <div className="TaskDiv">
      <div className="MidTaskDiv">
        <div className="task-info">
          <p id="MainTaskText">Task Done</p>
          <p id="TaskText">Keep it up</p>
        </div>

        <TaskCount doneCount={props.doneCount} totalCount={props.totalCount} />
      </div>
    </div>
  );
};

export default TaskDone;
