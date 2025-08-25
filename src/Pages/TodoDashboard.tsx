import TaskWrite from "@Components/TaskWrite";
import Messages from "@Components/Messages";
import TaskLogs from "@Components/TaskLogs";
import Heading from "@Components/Heading";
import TaskDone from "@Components/TaskDone";
import {useMemo } from "react";

interface Task {
  id: number;
  done: boolean;
  text: string;
}
type TodoProps = {
  tasks: Task[];
  setTask: (updated: Task[]) => void;
};

const TodoDashboard = (props: TodoProps) => {
  const tasks = props.tasks;
  const setTasks = props.setTask;
  const totalTask = tasks.length;

  //this UseMemo is used to optimize
  const doneTask = useMemo(
    () =>
      tasks.reduce(
        (tasksCount, currentTask) => tasksCount + (currentTask.done ? 1 : 0),
        0
      ),
    [tasks]
  );

  // Helper: save tasks to LS
  const saveTasksToStorage = (updated: Task[]) => {
    localStorage.setItem("task", JSON.stringify(updated));
    setTasks(updated);
  };

  // Add task → append to LS
  const handleAddTask = (text: string) => {
    const newTask = { id: Date.now(), done: false, text };
    const updated = [...tasks, newTask];
    saveTasksToStorage(updated);
  };

  // Toggle done by index
  const handleToggleDone = (index: number) => {
    if (tasks[index]) {
      tasks[index].done = !tasks[index].done;
      saveTasksToStorage([...tasks]);
    }
  };

  // Delete by index
  const handleDeleteTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    saveTasksToStorage(updated);
  };

  // Edit text by index
  const handleEditTask = (index: number, newText: string) => {
    if (tasks[index]) {
      tasks[index].text = newText;
      saveTasksToStorage([...tasks]);
    }
  };

  return (
    <>
      <Heading />
      <TaskDone doneCount={doneTask} totalCount={totalTask} />
      <TaskWrite onAddTotalTask={handleAddTask} />
      {totalTask > 0 ? (
        <TaskLogs
          tasks={tasks}
          onDoneTask={handleToggleDone}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
        />
      ) : (
        <Messages />
      )}
    </>
  );
};

export default TodoDashboard;
