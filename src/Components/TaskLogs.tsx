import React from 'react'
import DeleteTasks from './DeleteTasks'
import EditTasks from './EditTasks'
import Checkboxes from './CheckBoxes'
type TaskCountProps =
{
  count:number
  onAddDoneTask: ()=>void
}

const TaskLogs = (props:TaskCountProps) => {
  return (
    <>
    {Array.from({ length: props.count }).map((_, i) => (
    <div className='Tasklogs'>
        <div className='Logs' key={i}>
          <Checkboxes onAddDoneTask={props.onAddDoneTask} />
          <div className='Modify'>
            <EditTasks />
            <DeleteTasks />
          </div>
        </div>
      
    </div>
  ))}
  </>
  )
}

export default TaskLogs