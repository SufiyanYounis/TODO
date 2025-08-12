import React from 'react'
import TaskCount from './TaskCount'
type TaskCountProps=
{
  DoneCount:number
  TotalCount:number
}
const TaskDone = (props:TaskCountProps) => {
  return (
    <div className='TaskDiv'>
      <div className='MidTaskDiv'>
    <div className="task-info">
      <p id='MainTaskText'>Task Done</p>
      <p id="TaskText">Keep it up</p>
    </div>
    
    <TaskCount DoneCount={props.DoneCount} TotalCount={props.TotalCount}/>
    </div>
  </div>
  )
}

export default TaskDone