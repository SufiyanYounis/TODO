import { useState } from "react";
import Checkboxes from "./CheckBoxes";
import EditTaskButtonSvg from "@assets/icons/EditTaskButtonSvg";
import DeleteTaskButtonSvg from "@assets/icons/DeleteTaskButtonSvg";

//this the the properties of the TaskLogs

type TaskCountProps = {
  tasks: { id: number; text: string; done: boolean }[];
  onDoneTask: (index: number, checked: boolean) => void;
  onDeleteTask: (index: number) => void;
  onEditTask: (index: number, newText: string) => void;
};

const TaskLogs = (props: TaskCountProps) => {
  //these are my React Hooks that are use to manage the states of Task Log Components

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [draft, setDraft] = useState("");

  return (
    <>
      {/*iterating over each task with their specific id and text */}
      {props.tasks.map((t, i) => (
        <div className="Tasklogs" key={t.id}>
          <div className="Logs">
            {/*Toggling each Checkobx with its index so that only the single checkbox is toggled */}

            <Checkboxes
              checked={t.done}
              onAddDoneTask={(checked) => props.onDoneTask(i, checked)}
            />
            {editingIndex === i ? (
              <input
                className="EditInput"
                value={draft}
                onChange={(e) => {
                  setDraft(e.target.value);
                  localStorage.setItem(
                    "edit-draft",
                    JSON.stringify(e.target.value)
                  );
                }}
                onBlur={() => {
                  props.onEditTask(i, draft.trim());
                  setEditingIndex(null);
                }}
              />
            ) : (
              <span
                className="TextMessage"
                key={t.id}
                style={{ textDecoration: t.done ? "line-through" : "none" }}
              >
                {t.text}
              </span>
            )}
            <div className="Modify">
              <div
                onClick={() => {
                  setEditingIndex(i);
                  setDraft(t.text);
                }}
              >
                <EditTaskButtonSvg />
              </div>
              <div onClick={() => props.onDeleteTask(i)}>
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
