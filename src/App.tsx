import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoDashboard from "@/Pages/TodoDashboard";
import LogIn from "@/Pages/LogIn";
import SignUp from "@/Pages/SignUp";
import Home from "@/Pages/Home";

const App = () => {
  return (
    <Routes>
      {/* Root path  */}
      <Route path="/" index={true} element={<Home />} />
      {/* LogIn path  */}
      <Route path="/login" element={<LogIn />} />

      {/* SignUp path  */}
      <Route path="/signup" element={<SignUp />} />

      {/* TODO DASHBOARD path  */}

      <Route path="/todo" element={<TodoDashboard />} />
    </Routes>
  );
};

export default App;
