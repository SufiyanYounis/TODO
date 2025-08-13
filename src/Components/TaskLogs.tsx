import React from 'react'

import Checkboxes from './CheckBoxes'
import Editbutton from "../assets/Icons/EditButton.svg"
import DeleteButton from "../assets/Icons/DeleteButton.svg"
const TaskLogs = () => {
  return (
    <div className='Tasklogs'>
      <div className='Logs'>
        <Checkboxes/>
        <div className='Modify'>
          <img src={Editbutton}/>
          <img src={DeleteButton}/>
        </div>
      </div>
    </div>
  )
}

export default TaskLogs