import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type tasks = {
  id: number;
  text: string;
  done: boolean;
};
type TasksState = {
  items: tasks[];
  doneTasks: number;
  totalTasks: number;
};

const initialState: TasksState = { items: [], doneTasks: 0, totalTasks: 0 };
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<tasks>) {
      state.items.push(action.payload);
      state.totalTasks += 1;
    },
    DeleteTask(state, action: PayloadAction<number>) {
      const toDelete = state.items.find((obj) => obj.id === action.payload);
      if (toDelete?.done) {
        state.doneTasks -= 1;
      }
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalTasks -= 1;
    },
    EditTask(state, action: PayloadAction<{ id: number; text: string }>) {
      const updated_arr = state.items.find(
        (obj) => obj.id === action.payload.id
      );
      if (updated_arr) updated_arr.text = action.payload.text;
    },
    Toggle(state, action: PayloadAction<number>) {
      const updated_arr = state.items.find((obj) => obj.id === action.payload);
      if (updated_arr) updated_arr.done = !updated_arr.done;
      if (updated_arr?.done) state.doneTasks += 1;
      else state.doneTasks -= 1;
    },
  },
});

export const { addTask, DeleteTask, EditTask, Toggle } = taskSlice.actions;
export default taskSlice.reducer;
