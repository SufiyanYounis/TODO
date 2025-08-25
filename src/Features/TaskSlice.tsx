import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Tasks = {
  id: number;
  text: string;
  done: boolean;
};
type TasksState = {
  items: Tasks[];
  doneTask: number;
  totalTask: number;
};

const initialState: TasksState = { items: [], doneTask: 0, totalTask: 0 };
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Tasks>) {
      state.items.push(action.payload);
      state.totalTask += 1;
    },
    DeleteTask(state, action: PayloadAction<number>) {
      const toDelete = state.items.find((obj) => obj.id === action.payload);
      if (toDelete?.done) {
        state.doneTask -= 1;
      }
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalTask -= 1;
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
      if (updated_arr?.done) state.doneTask += 1;
      else state.doneTask -= 1;
    },
  },
});

export const { addTask, DeleteTask, EditTask, Toggle } = taskSlice.actions;
export default taskSlice.reducer;
