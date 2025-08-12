import React from 'react'
type CheckboxProps=
{
  onAddDoneTask:()=> void
}
const Checkboxes = (props:CheckboxProps) => {
  return (
    <label className="custom-checkbox" >
    <input type="checkbox" onClick={props.onAddDoneTask} />
    <span className="checkmark"></span>
  </label>
  )
}

export default Checkboxes