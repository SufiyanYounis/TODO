import React from 'react'

import Checkboxes from './CheckBoxes'
//import Editbutton from "../assets/Icons/EditButton.svg"
import EditTaskButtonSvg from '../assets/Icons/EditTaskButtonSvg'
import DeleteTaskButtonSvg from '../assets/Icons/DeleteTaskButtonSvg'
const TaskLogs = () => {
  return (
    <div className='Tasklogs'>
      <div className='Logs'>
        <Checkboxes/>
        <div className='Modify'>
          <EditTaskButtonSvg />
          <DeleteTaskButtonSvg/>
        </div>
      </div>
    </div>
  )
}

export default TaskLogs