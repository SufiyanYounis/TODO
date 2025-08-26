import { useSelector } from "react-redux";
import type { RootState } from "@app/store";
import TaskWrite from "@Components/TaskWrite";
import Messages from "@Components/Messages";
import TaskLogs from "@Components/TaskLogs";
import Heading from '@Components/Heading';
import TaskDone from "@Components/TaskDone";


const TodoDashboard = () => {
  const totalTask = useSelector((state:RootState)=>state.task.totalTasks)

  return (
    <>
      <Heading />
      <TaskDone  />
    <TaskWrite  />
    {totalTask > 0 ? (
      <TaskLogs
      />
    ) : (
      <Messages />
    )}
    </>
  );
};

export default TodoDashboard;
