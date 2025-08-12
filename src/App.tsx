import "./App.css"  
import { useState } from "react"
import Heading from './Components/Heading'
import TaskDone from "./Components/TaskDone"
import TaskWrite from "./Components/TaskWrite"
import Messages from "./Components/Messages"
import TaskLogs from "./Components/TaskLogs"
const App = () => {
  const [doneTask, setDoneTask] =useState<number>(0)
  const [TotalTask, setTotalTask] = useState<number>(0)
  const handleTotalTask=()=>
  {
    setTotalTask(d=>d+1)
  }

  const handleDoneTask=()=>
    {
      setDoneTask(t=>t+1)
    }


  return (
    <>
    <Heading/>
    <TaskDone DoneCount={doneTask} TotalCount={TotalTask} />
    <TaskWrite onAddTotalTask={handleTotalTask} />
    {TotalTask > 0 ? <TaskLogs count={TotalTask} onAddDoneTask={handleDoneTask}/>  : <Messages/>}

    </>
    )
}

export default App;