import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Features/TaskSlice"
import { localStorageMiddleware } from "@/middleware/LocalStorage";


const preloadedState = () => {
    try {
      const data = localStorage.getItem("Tasks");
      if (data === null) return undefined;
      return { task: JSON.parse(data) };
    } catch (err) {
      return undefined;
    }
  };



export const store = configureStore(
    {
        reducer:{
            task:taskReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(localStorageMiddleware),
          preloadedState: preloadedState(),
    }
    
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
