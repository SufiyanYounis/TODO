import TaskWrite from "../Components/TaskWrite";
import Messages from "../Components/Messages";
import TaskLogs from "../Components/TaskLogs";
import Heading from '../Components/Heading';
import TaskDone from "../Components/TaskDone";

type TodoProps =
{
  doneTask : number;
  totalTask : number;
  tasks: { id: number; text: string; done: boolean }[];
  handleAddTask : (text:string)=>void
  handleToggleDone:(index:number)=>void
  handleDeleteTask:(index:number)=>void
  handleEditTask:(index:number , newText:string)=>void
}
const TodoDashboard = (props:TodoProps) => {

  return (
    <>
      <Heading />
      <TaskDone doneCount={props.doneTask} totalCount={props.totalTask} />
    <TaskWrite onAddTotalTask={props.handleAddTask} />
    {props.totalTask > 0 ? (
      <TaskLogs
        tasks={props.tasks}
        onDoneTask={props.handleToggleDone}
        onDeleteTask={props.handleDeleteTask}
        onEditTask={props.handleEditTask}
      />
    ) : (
      <Messages />
    )}
    </>
  )
}

export default TodoDashboard