import { type Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action); // let reducers handle the action first
  const state = store.getState();
  
  try {
    localStorage.setItem("Tasks", JSON.stringify(state.task));
  } catch (err) {
    console.error("Failed to save state:", err);
  }

  return result;
};
