import "./App.css";
import { useState, useMemo } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Heading from "./Components/Heading";
import TaskDone from "./Components/TaskDone";
import TodoDashboard from "./Pages/TodoDashboard";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";


type Task = {id: number, done: boolean ,text:string}
const App = () => {
  //this is a hook to set the tasks
  const [tasks, _] = useState<Task[]>(()=>
  {
    const save = localStorage.getItem("task");
    console.log(save);
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
