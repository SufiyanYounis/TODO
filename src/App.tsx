import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoDashboard from "@Pages/TodoDashboard";
import LogIn from "@Pages/LogIn";
import SignUp from "@Pages/SignUp";
import Home from "@Pages/Home";
import { useState } from "react";

type Task = { id: number; done: boolean; text: string };

const App = () => {
  // one global use State hook
  const [tasks, setTasks] = useState<Task[]>(() => {
    const save = localStorage.getItem("task");
    return save ? JSON.parse(save) : [];
  });

  return (
    <Routes>
      {/* Root path  */}
      <Route path="/" index={true} element={<Home tasks={tasks} />} />
      {/* LogIn path  */}
      <Route path="/login" element={<LogIn />} />

      {/* SignUp path  */}
      <Route path="/signup" element={<SignUp />} />

      {/* TODO DASHBOARD path  */}

      <Route
        path="/todo"
        element={<TodoDashboard tasks={tasks} setTask={setTasks} />}
      />
    </Routes>
  );
};

export default App;
