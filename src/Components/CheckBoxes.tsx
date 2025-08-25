import { useDispatch, useSelector } from "react-redux"
import { Toggle } from "@Features/TaskSlice";
import type { RootState } from "@app/store";

type CheckboxProps=
{
  id:number
}

const Checkboxes = (props:CheckboxProps) => {
  const dispatch = useDispatch();
  const checked = useSelector(
    (state: RootState) => state.task.items.find(obj => obj.id === props.id)?.done
  );
  return (
    <label className="custom-checkbox" >
    <input type="checkbox" onClick={()=>dispatch(Toggle(props.id))} checked={checked} />
    <span className="checkmark"></span>
  </label>
  )
}

export default Checkboxes
