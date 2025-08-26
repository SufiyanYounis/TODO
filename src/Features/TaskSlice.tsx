import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: number;
  text: string;
  done: boolean;
};
type TasksState = {
  tasks: Task[];
  doneTasks: number;
  totalTasks: number;
};

const initialState: TasksState = { tasks: [], doneTasks: 0, totalTasks: 0 };
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
      state.totalTasks += 1;
    },
    DeleteTask(state, action: PayloadAction<number>) {
      const toDelete = state.tasks.find((obj) => obj.id === action.payload);
      if (toDelete?.done) {
        state.doneTasks -= 1;
      }
      state.tasks = state.tasks.filter((obj) => obj.id !== action.payload);
      state.totalTasks -= 1;
    },
    EditTask(state, action: PayloadAction<{ id: number; text: string }>) {
      const updated_arr = state.tasks.find(
        (obj) => obj.id === action.payload.id
      );
      if (updated_arr) updated_arr.text = action.payload.text;
    },
    Toggle(state, action: PayloadAction<number>) {
      const updated_arr = state.tasks.find((obj) => obj.id === action.payload);
      if (updated_arr) updated_arr.done = !updated_arr.done;
      if (updated_arr?.done) state.doneTasks += 1;
      else state.doneTasks -= 1;
    },
  },
});

export const { addTask, DeleteTask, EditTask, Toggle } = taskSlice.actions;
export default taskSlice.reducer;
