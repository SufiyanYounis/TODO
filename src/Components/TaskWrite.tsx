import React from 'react'
import AddTaskButton from './AddTaskButton';

export const TaskWrite = () => {
  return (
    <div className='Taskwrite'>
        <input type="text" className='InputText' placeholder='write your next task'/>
        <AddTaskButton/>
    </div>
  )
}
export default TaskWrite;