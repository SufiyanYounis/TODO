import "./App.css";
import { useState, useMemo } from "react";
import {Routes, Route } from "react-router-dom";
import TodoDashboard from "./Pages/TodoDashboard";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

type Task = { id: number; done: boolean; text: string };

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const save = localStorage.getItem("task");
    return save ? JSON.parse(save) : [];
  });

  const totalTask = tasks.length;

  //this UseMemo is used to optimize
  const doneTask = useMemo(
    () =>
      tasks.reduce(
        (tasksCount, currentTask) => tasksCount + (currentTask.done ? 1 : 0),
        0
      ),
    [tasks]
  );

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
    <Routes>

      {/* Root path  */}
      <Route
        path="/"
        index={true}
        element={<Home doneTask={doneTask} totalTask={totalTask} />}
      />
      {/* LogIn path  */}
      <Route path="/login" element={<LogIn />} />

      {/* SignUp path  */}
      <Route path="/signup" element={<SignUp />} />

      {/* TODO DASHBOARD path  */}

      <Route
        path="/todo"
        element={
          <TodoDashboard
            totalTask={totalTask}
            doneTask={doneTask}
            tasks={tasks}
            handleToggleDone={handleToggleDone}
            handleAddTask={handleAddTask}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
          />
        }
      />
    </Routes>
  );
};

export default App;
