import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "@Features/TaskSlice"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./index";
const sagaMiddleware = createSagaMiddleware();


export const store = configureStore(
    {
        reducer:{
            task:taskReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
    }
)
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
