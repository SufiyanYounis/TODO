import React, { useState } from 'react'
type AddButtonProps = {
  onAdd:() => void
}

const AddTaskButton = (props: AddButtonProps) => {

  return (
    <button className='addTaskButton'>
      {/* Imported this svg tag becaouse the ' + ' sign was an svg tag and by manually i couldn't be able to make this level thin */}
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" onClick = {props.onAdd} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"></path></svg>
    </button>
  )
}

export default AddTaskButton