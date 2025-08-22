import { useState} from "react";
import Checkboxes from "./CheckBoxes";
import EditTaskButtonSvg from "../assets/icons/EditTaskButtonSvg";
import DeleteTaskButtonSvg from "../assets/icons/DeleteTaskButtonSvg";
import { useSelector,useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import { EditTask, DeleteTask } from "../Features/TaskSlice";;


const TaskLogs = () => {
  //these are my React Hooks that are use to manage the states of Task Log Components

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [draft, setDraft] = useState("");

  const tasks = useSelector((state:RootState)=> state.task.items);
  const dispatch = useDispatch();

  return (
    <>
      {/*iterating over each task with their specific id and text */}
      {tasks.map((arr_obj, i) => (
        <div className="Tasklogs" key={arr_obj.id}>
          <div className="Logs">
            {/*Toggling each Checkbox with its index so that only the single checkbox is toggled */}

            <Checkboxes
              id={arr_obj.id}
            />
            {editingIndex === i ? (
              <input
                className="EditInput"
                value={draft}
                onChange={(e) => {
                  setDraft(e.target.value);
                  // localStorage.setItem("edit-draft", JSON.stringify(e.target.value));

                }}
                onBlur={() => {
                dispatch(EditTask({ id : arr_obj.id , text : draft.trim()}))
                  setEditingIndex(null);
                }}
              />
            ) : (
              <span
                className="TextMessage"
                key={arr_obj.id}
                style={{ textDecoration: arr_obj.done ? "line-through" : "none" }}
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
              <div onClick={() =>dispatch(DeleteTask(arr_obj.id))}>
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
