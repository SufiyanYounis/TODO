import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@app/store";
import { toggleTaskRequest } from "@Features/TaskSlice";

type CheckboxProps=
{
  _id:string
}

const Checkboxes = (props:CheckboxProps) => {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state: RootState) => state.task.tasks.find(obj => obj._id === props._id)?.completed
  );
  const isChecked = Boolean(checked)
  return (
    <label className="custom-checkbox" >
    <input type="checkbox" onClick={()=>dispatch(toggleTaskRequest({_id:props._id, completed:!isChecked}))} checked={isChecked} />
    <span className="checkmark"></span>
  </label>
  )
}

export default Checkboxes
