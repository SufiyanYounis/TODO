import "./App.css"
import Heading from './Components/Heading'
import TaskDone from "./Components/TaskDone"
import TaskWrite from "./Components/TaskWrite"
import Messages from "./Components/Messages"
import TaskLogs from "./Components/TaskLogs"
const App = () => {
  return (
    <>
    <Heading/>
    <TaskDone/>
    <TaskWrite/>
    <Messages/>
    <TaskLogs/>
    </>
    )
}

export default App;