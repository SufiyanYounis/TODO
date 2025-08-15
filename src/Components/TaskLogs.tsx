import { useState } from "react";
import Checkboxes from "./CheckBoxes";
import EditTaskButtonSvg from "../assets/icons/EditTaskButtonSvg";
import DeleteTaskButtonSvg from "../assets/icons/DeleteTaskButtonSvg";


//this the the properties of the TaskLogs

type TaskCountProps = {
  tasks: { id: number; text: string }[];
  onAddDoneTask: (index: number, checked: boolean) => void;
  onDeleteTask: (index: number) => void;
  onEditTask: (index: number, newText: string) => void;
};

const TaskLogs = (props: TaskCountProps) => {
  
  //these are my React Hooks that are use to manage the states of Task Log Components

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [draft, setDraft] = useState("");
  const [Ischecked, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!Ischecked);
  };

  return (
    <>
    {/*iterating over each task with their specific id and text */}
      {props.tasks.map((t, i) => (
        <div className="Tasklogs" key={t.id}>
          <div className="Logs">

             {/*Toggling each Checkobx with its index so that only the single checkbox is toggled */}

            <Checkboxes
              onAddDoneTask={(checked) => props.onAddDoneTask(i, checked)}
              handleCheck={handleCheck}
            />
            { editingIndex === i ? (

              
              <input

                className="EditInput"
                value={draft}
                onChange={(e) => {setDraft(e.target.value);}}
                onMouseLeave={()=>{
                  props.onEditTask(i,draft.trim());
                  setEditingIndex(null)
                }}
              />
            ) : (
              <span
                className="TextMessage" key={t.id}
                style={{ textDecoration: Ischecked ? "line-through" : "none" }}
              >
                {t.text}
              </span>
            )}
            <div className="Modify">
              <EditTaskButtonSvg
                onEdit={() => {
                  setEditingIndex(i);
                  setDraft(t.text);
                }}
              />
              <DeleteTaskButtonSvg onDelete={() => props.onDeleteTask(i)} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskLogs;
