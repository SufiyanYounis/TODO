
import { useEffect, useState, useMemo} from "react";
import TaskWrite from "../Components/TaskWrite";
import Messages from "../Components/Messages";
import TaskLogs from "../Components/TaskLogs";
import Heading from '../Components/Heading';
import TaskDone from "../Components/TaskDone";



const TodoDashboard = () => {

    const [tasks, setTasks] = useState<
    { id: number; done: boolean; text: string }[]
  >(() => {
    const save = localStorage.getItem("task");
    console.log(save);
    return save ? JSON.parse(save) : [];
  });
  const totalTask= tasks.length
  //this is a
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);


  const doneTask = useMemo(
    () =>
      tasks.reduce(
        (tasksCount, currentTask) => tasksCount + (currentTask.done ? 1 : 0),
        0
      ),
    [tasks]
  );


  //handlers to handle the states

  const handletotalTask = (text: string) =>
    setTasks((ts) => [...ts, { id: Date.now(), done: false, text }]);

  const handleToggleDone = (index: number, checked: boolean) =>
    setTasks((ts) =>
      ts.map((t, i) => (i === index ? { ...t, done: checked } : t))
    );

  const handleDeleteTasks = (index: number) =>
    setTasks((ts) => ts.filter((_, i) => i !== index));

  const handleEditTask = (index: number, newText: string) =>
    setTasks((ts) =>
      ts.map((t, i) => (i === index ? { ...t, text: newText } : t)));





  return (
    <>
      <Heading />
      <TaskDone doneCount={doneTask} totalCount={totalTask} />
    <TaskWrite onAddTotalTask={handletotalTask} />
    {totalTask > 0 ? (
      <TaskLogs
        tasks={tasks}
        onAddDoneTask={handleToggleDone}
        onDeleteTask={handleDeleteTasks}
        onEditTask={handleEditTask}
      />
    ) : (
      <Messages />
    )}
    </>
  )
}

export default TodoDashboard