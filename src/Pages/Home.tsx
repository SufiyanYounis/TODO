import Heading from "@Components/Heading";
import TaskDone from "@Components/TaskDone";
import { useNavigate } from "react-router-dom";

interface Task {
  id: number;
  done: boolean;
  text: string;
}
type HomeProps = { tasks: Task[] };
const Home = (props: HomeProps) => {
  const navigate = useNavigate();
  const doneCount = () => {
    let count = 0;
    for (let i = 0; i < props.tasks.length; i++) {
      if (props.tasks[i].done) {
        count++;
      }
    }
    return count;
  };
  const doneTask = doneCount();
  return (
    <>
      <Heading />
      <TaskDone doneCount={doneTask} totalCount={props.tasks.length} />
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
  );
};

export default Home;
