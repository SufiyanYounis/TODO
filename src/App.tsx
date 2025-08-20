import "./App.css";
import { useEffect, useState, useMemo } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Heading from "./Components/Heading";
import TaskDone from "./Components/TaskDone";
import TodoDashboard from "./Pages/TodoDashboard";
import TaskWrite from "./Components/TaskWrite";
import Messages from "./Components/Messages";
import TaskLogs from "./Components/TaskLogs";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
const App = () => {
  //this is a hook to set the tasks
  const [tasks, setTasks] = useState<
    { id: number; done: boolean; text: string }[]
  >(() => {
    const save = localStorage.getItem("task");
    console.log(save);
    return save ? JSON.parse(save) : [];
  });

  //Total task is set equals to the length of task
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
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/"
        index={true}
        element={
          <>
            <Heading />
            <TaskDone doneCount={doneTask} totalCount={totalTask} />
            <div className="flex justify-center gap-20">
              <button
                className="text-stone-50 bg-[#8aad32] px-8 py-4 rounded-full cursor-pointer"
                onClick={() => navigate("/login")}
              >
                LogIn
              </button>
              <button
                className="text-stone-50 bg-[#8aad32] px-7 py-4 rounded-full cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                SignUp
              </button>
            </div>
          </>
        }
      />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<TodoDashboard />} />
    </Routes>
  );
};

export default App;
