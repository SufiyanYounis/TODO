import React from 'react'
import AddTaskButton from './AddTaskButton';
type AddButtonProps = 
{
  onAddTotalTask:()=> void
}
export const TaskWrite = (props:AddButtonProps) => {
  return (
    <div className='Taskwrite'>
        <input type="text" className='InputText' placeholder='write your next task'/>
        <AddTaskButton onAdd={props.onAddTotalTask} />
    </div>
  )
}
export default TaskWrite;