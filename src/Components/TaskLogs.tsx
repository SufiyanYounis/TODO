import { useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import type { RootState } from "@app/store";
import { editTaskRequested, deleteTaskRequested , fetchTasksRequested} from "@Features/TaskSlice";
import EditTaskButtonSvg from "@assets/icons/EditTaskButtonSvg";
import DeleteTaskButtonSvg from "@assets/icons/DeleteTaskButtonSvg";
import Checkboxes from "./CheckBoxes";


const TaskLogs = () => {
  //these are my React Hooks that are use to manage the states of Task Log Components

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [draft, setDraft] = useState("");

  const tasks = useSelector((state:RootState)=> state.task.tasks);
  const dispatch = useDispatch();
  

  return (
    <>
      {/*iterating over each task with their specific id and text */}
      {tasks.map((arr_obj, i) => (
        <div className="Tasklogs" key={arr_obj._id}>
          <div className="Logs">
            {/*Toggling each Checkbox with its index so that only the single checkbox is toggled */}

            <Checkboxes
            _id={arr_obj._id}
            />
            {editingIndex === i ? (
              <input
              autoFocus
                className="EditInput"
                value={draft}
                onChange={(e) => {
                  setDraft(e.target.value)
                }}
                onBlur={() => {
                dispatch(editTaskRequested({ _id : arr_obj._id , text : draft.trim()}))
                  setEditingIndex(null);
                }}
              />
            ) : (
              <span
                className="TextMessage"
                key={arr_obj._id}
                style={{ textDecoration: arr_obj.completed ? "line-through" : "none" }}
              >
                {arr_obj.text}
              </span>
            )}
            <div className="Modify">
              <div
                onClick={() => {
                  setEditingIndex(i);
                  setDraft(arr_obj.text);
                }}
              >
                <EditTaskButtonSvg />
              </div>
              <div onClick={() =>dispatch(deleteTaskRequested({ _id : arr_obj._id }))}>
                <DeleteTaskButtonSvg />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskLogs;
