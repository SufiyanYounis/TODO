import "./App.css";
import { useState, useMemo } from "react";
import Heading from "./Components/Heading";
import TaskDone from "./Components/TaskDone";
import TaskWrite from "./Components/TaskWrite";
import Messages from "./Components/Messages";
import TaskLogs from "./Components/TaskLogs";
const App = () => {
  //this is a hook to set the tasks
  const [tasks, setTasks] = useState<{ id: number, done: boolean ,text:string}[]>([]);
  //Total task is set equals to the length of task 
  const totalTask = tasks.length;
  //this UseMemo is used to optimize
  const doneTask = useMemo(()=>tasks.reduce((tasksCount,currentTask)=> tasksCount+(currentTask.done?1:0),0),[tasks])

  //handlers to handle the states

  const handletotalTask = (text:string) =>
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
      <TaskDone doneCount={doneTask} totalCount={totalTask} />
      <TaskWrite onAddTotalTask={handletotalTask} />
      {totalTask > 0 ? (
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
