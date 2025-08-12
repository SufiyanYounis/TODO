import React from 'react'
import DeleteTasks from './DeleteTasks'
import EditTasks from './EditTasks'
import Checkboxes from './CheckBoxes'
const TaskLogs = () => {
  return (
    <div className='Tasklogs'>
      <div className='Logs'>
        <Checkboxes/>
        <div className='Modify'>
        <EditTasks/>
        <DeleteTasks/>
        </div>
      </div>
    </div>
  )
}

export default TaskLogs