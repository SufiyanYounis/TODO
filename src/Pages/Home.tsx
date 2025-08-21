import Heading from '../Components/Heading'
import TaskDone from '../Components/TaskDone'
import { useNavigate } from 'react-router-dom'

type HomeProps = 
{
    doneTask:number;
    totalTask:number
}
const Home = (props:HomeProps) => {

    const navigate = useNavigate();
  return (
    <>
    <Heading />
    <TaskDone doneCount={props.doneTask} totalCount={props.totalTask} />
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


