import React from 'react'
type TaskCountProps = 
{
  DoneCount:number
  TotalCount:number
}

const TaskCount = (props:TaskCountProps) => {
  return (
    <div className='circle-container'>
        <span className='circle-text'>
            {props.DoneCount}/{props.TotalCount}
        </span>
    </div>
  )
}

export default TaskCount