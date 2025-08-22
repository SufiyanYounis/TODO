import Heading from '@/Components/Heading'
import TaskDone from '@/Components/TaskDone'
import { useNavigate } from 'react-router-dom'
import { useState, useMemo } from 'react'

type Task = { id: number; done: boolean; text: string };
const Home = () => {

    const [tasks, _] = useState<Task[]>(() => {
      const save = localStorage.getItem("task");
      return save ? JSON.parse(save) : [];
    });
  
  
    const totalTask = tasks.length;
  
    const navigate = useNavigate();
      const doneTask = useMemo(
        () =>
          tasks.reduce(
            (tasksCount, currentTask) => tasksCount + (currentTask.done ? 1 : 0),
            0
          ),
        [tasks]
      );
  return (
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
  )
}

export default Home


