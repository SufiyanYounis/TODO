type CheckboxProps=
{
  onAddDoneTask:(checked: boolean)=> void
  handleCheck :()=>void
}
const Checkboxes = (props:CheckboxProps) => {
  return (
    <label className="custom-checkbox" >
    <input type="checkbox"  onChange={(e)=> props.onAddDoneTask(e.target.checked)} />
    <span className="checkmark"></span>
  </label>
  )
}

export default Checkboxes
