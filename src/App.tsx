import "./App.css";
import { useEffect, useState, useMemo} from "react";

import Heading from "./Components/Heading";
import TaskDone from "./Components/TaskDone";
import TaskWrite from "./Components/TaskWrite";
import Messages from "./Components/Messages";
import TaskLogs from "./Components/TaskLogs";
type Task = {id: number, done: boolean ,text:string}
const App = () => {
  //this is a hook to set the tasks
  const [tasks, setTasks] = useState<Task[]>(()=>
  {
    const save = localStorage.getItem("task");
    console.log(save)
    return save ? JSON.parse(save) : []
  });
  //Total task is set equals to the length of task
   
  const totalTask = tasks.length;

  //this UseMemo is used to optimize
  const doneTask = useMemo(()=>tasks.reduce((tasksCount,currentTask)=> tasksCount+(currentTask.done?1:0),0),[tasks])

    // Helper: save tasks to LS
    const saveTasksToStorage = (updated: Task[]) => {
      localStorage.setItem("task", JSON.stringify(updated));
      setTasks(updated);
    };
  
    // Add task → append to LS
    const handleAddTask = (text: string) => {
      const newTask = { id: Date.now(), done: false, text };
      const updated = [...tasks, newTask];
      saveTasksToStorage(updated);
    };
  
    // Toggle done by index
    const handleToggleDone = (index: number) => {
      if (tasks[index]) {
        tasks[index].done = !tasks[index].done;
        saveTasksToStorage([...tasks]);
      }
    };
  
    // Delete by index
    const handleDeleteTask = (index: number) => {
      
      const updated = tasks.filter((_, i) => i !== index);
      saveTasksToStorage(updated);
    };
  
    // Edit text by index
    const handleEditTask = (index: number, newText: string) => {
      if (tasks[index]) {
        tasks[index].text = newText;
        saveTasksToStorage([...tasks]);
      }
    };

  return (
    <>
      <Heading />
      <TaskDone doneCount={doneTask} totalCount={totalTask} />
      <TaskWrite onAddTotalTask={handleAddTask} />
      {totalTask > 0 ? (
        <TaskLogs
          tasks={tasks}
          onAddDoneTask={handleToggleDone}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
        />
      ) : (
        <Messages />
      )}
    </>
  );
};

export default App;
