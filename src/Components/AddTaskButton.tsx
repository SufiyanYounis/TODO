import React from 'react'
import PlusButton from "../assets/Icons/PlusButton.svg"
const AddTaskButton = () => {
  return (
    <button className='addTaskButton'>
      <img src={PlusButton}/>
    </button>
  )
}

export default AddTaskButton