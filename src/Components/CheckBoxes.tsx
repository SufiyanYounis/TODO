type CheckboxProps=
{
  checked:boolean
  onAddDoneTask:(checked: boolean)=> void
}
const Checkboxes = (props:CheckboxProps) => {
  return (
    <label className="custom-checkbox" >
    <input type="checkbox"  onChange={(e)=> props.onAddDoneTask(e.target.checked)} checked={props.checked}/>
    <span className="checkmark"></span>
  </label>
  )
}

export default Checkboxes
