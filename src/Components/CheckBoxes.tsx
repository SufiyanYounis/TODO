import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@app/store";
import { Toggle } from "@Features/TaskSlice";

type CheckboxProps=
{
  id:number
}

const Checkboxes = (props:CheckboxProps) => {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state: RootState) => state.task.tasks.find(obj => obj.id === props.id)?.done
  );
  return (
    <label className="custom-checkbox" >
    <input type="checkbox" onClick={()=>dispatch(Toggle(props.id))} checked={checked} />
    <span className="checkmark"></span>
  </label>
  )
}

export default Checkboxes
