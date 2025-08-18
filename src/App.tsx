import "./App.css";
import { useEffect, useState } from "react";
import Heading from "./Components/Heading";
import TaskDone from "./Components/TaskDone";
import TaskWrite from "./Components/TaskWrite";
import Messages from "./Components/Messages";
import TaskLogs from "./Components/TaskLogs";
const App = () => {
  //this is a hook to set the tasks
  const [tasks, setTasks] = useState<{ id: number, done: boolean ,text:string}[]>(()=>
  {
    const save = localStorage.getItem("task");
    console.log(save)
    return save ? JSON.parse(save) : []
  });
  //this is a 
  useEffect(()=>
  {
    localStorage.setItem("task",JSON.stringify(tasks));
  },[tasks])
  //Total task is set equals to the length of task 
  const TotalTask = tasks.length;
  //this doneTask is filtered so if the task are done , then they will increment
  const doneTask = tasks.filter((t) => t.done).length;

  //handlers to handle the states

  const handleTotalTask = (text:string) =>
    setTasks((ts) => [...ts, { id: Date.now(), done: false, text }]);

  const handleToggleDone = (index: number, checked: boolean) =>
    setTasks((ts) =>
      ts.map((t, i) => (i === index ? { ...t, done: checked } : t))
    );

  const handleDeleteTasks = (index: number) =>
    setTasks((ts) => ts.filter((_, i) => i !== index));

  const handleEditTask = (index: number, newText: string) =>
    setTasks((ts) => ts.map((t, i) => (i === index ? { ...t, text: newText } : t)));

  return (
    <>
      <Heading />
      <TaskDone DoneCount={doneTask} TotalCount={TotalTask} />
      <TaskWrite onAddTotalTask={handleTotalTask} />
      {TotalTask > 0 ? (
        <TaskLogs
          tasks={tasks}
          onAddDoneTask={handleToggleDone}
          onDeleteTask={handleDeleteTasks}
          onEditTask={handleEditTask}
        />
      ) : (
        <Messages />
      )}
    </>
  );
};

export default App;
