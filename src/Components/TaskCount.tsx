import { useSelector} from "react-redux";
import type { RootState } from "@app/store";

const TaskCount = () => {
  const totalTask = useSelector((state:RootState)=>state.task.totalTasks)
  const doneTask = useSelector((state:RootState)=>state.task.doneTasks)

  return (
    <div className="circle-container">
      <span className="circle-text">
        {doneTask}/{totalTask}
      </span>
    </div>
  );
};

export default TaskCount;
