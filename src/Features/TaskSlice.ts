import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  _id: string;
  text: string;
  completed: boolean;
};
type TasksState = {
  tasks: Task[];
  totalDoneTasks: number;
  totalTasks: number;
  loading: boolean;
  error: string;
};

const initialState: TasksState = {
  tasks: [],
  totalDoneTasks: 0,
  totalTasks: 0,
  loading: false,
  error: "",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    fetchTasksRequested(state) {
      state.loading = true;
    },
    fetchTasksSuccess(state, action: PayloadAction<Task[]>) {
      state.loading = false;
      state.tasks = action.payload;
      state.totalTasks = action.payload.length;
      state.totalDoneTasks = action.payload.filter((task) => task.completed).length;
    },

    fetchTasksFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    addTaskRequested(
      state,
      action:PayloadAction<{text:string}>
    ) 
    {
      state.loading=true
    },
    addTaskSuccess(state, action: PayloadAction<{text:string,completed:boolean,_id:string}>) {
      state.loading=false
      state.tasks.push(action.payload)
      state.totalTasks++
    },
    addTaskFailed(state, action: PayloadAction<string>) {
      state.loading=false;
      state.error=action.payload;
    },
    editTaskRequested(
      state,
      action:PayloadAction<{_id:string,text:string}>
    ) {
      state.loading = true;
    },
    editTaskSuccess(state, action: PayloadAction<Task>) {
      state.loading = false;
      // it iterates towards the map and if the id matches then it updates the task for that id
      state.tasks = state.tasks.map(task => task._id === action.payload._id ? action.payload : task)
    },
    editTaskFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteTaskRequested(state, action: PayloadAction<{ _id: string }>) {
      state.loading = true;
    },
    deleteTaskSuccess(state, action: PayloadAction<{ _id: string }>) {
      state.loading = false;
      state.tasks = state.tasks.filter(task => task._id !== action.payload._id)
      state.totalTasks--;
    },
    deleteTaskFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    toggleTaskRequest(state , action: PayloadAction<{_id:string, completed:boolean}>) {
      state.loading = true;
    },
    toggleTaskSuccess(state , action: PayloadAction<{_id:string, completed:boolean}>) {
      state.loading = false;
      state.tasks = state.tasks.map(task => task._id === action.payload._id ? {...task,completed:action.payload.completed} : task)
      if(action.payload.completed)
      {
        state.totalDoneTasks++;
      }
      else
      {
        state.totalDoneTasks--;
      }
    },
    toggleTaskFailed(state , action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTasksRequested,
  fetchTasksSuccess,
  fetchTasksFailed,
  addTaskRequested,
  addTaskSuccess,
  addTaskFailed,
  editTaskRequested,
  editTaskSuccess,
  editTaskFailed,
  deleteTaskRequested,
  deleteTaskSuccess,
  deleteTaskFailed,
  toggleTaskRequest,
  toggleTaskSuccess,
  toggleTaskFailed  
} = taskSlice.actions;
export default taskSlice.reducer;
