import React from 'react'
import AddTaskButtonSvg from '../assets/Icons/AddTaskButtonSvg';

export const TaskWrite = () => {
  return (
    <div className='Taskwrite'>
        <input type="text" className='InputText' placeholder='write your next task'/>
        <button className='addTaskButton'>
          <AddTaskButtonSvg/>
        </button>
    </div>
  )
}
export default TaskWrite;