import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchTasksSuccess,
  fetchTasksFailed,
  fetchTasksRequested,
  addTaskFailed,
  addTaskRequested,
  addTaskSuccess,
  editTaskFailed,
  editTaskRequested,
  editTaskSuccess,
  deleteTaskFailed,
  deleteTaskRequested,
  deleteTaskSuccess,
  toggleTaskFailed,
  toggleTaskSuccess,
  toggleTaskRequest,
} from "@Features/TaskSlice";

const API = import.meta.env.VITE_API_URL;
// saga worker function
function* fetchTasks(): Generator {
  try {
    const response = yield call(axios.get, `${API}/todo`);
    yield put(fetchTasksSuccess(response.data.data));
  } catch (error: any) {
    yield put(
      fetchTasksFailed(
        error.message ??
          "failed to fetch the task" ??
          error.response?.data?.message
      )
    );
  }
}

function* addTask(action: ReturnType<typeof addTaskRequested>): Generator {
  try {
    const res = yield call(axios.post, `${API}/todo`, action.payload); // { text, userId }
    yield put(addTaskSuccess(res.data.data));
  } catch (e: any) {
    yield put(addTaskFailed(e.message ?? "Failed to add task"));
  }
}

function* editTask(action: any): Generator {
  try {
    const res = yield call(axios.put, `${API}/todo/${action.payload._id}`, {
      text: action.payload.text,
    }); // { text, userId }

    yield put(editTaskSuccess(res.data.data));
  } catch (e: any) {
    yield put(editTaskFailed(e.message ?? "Failed to add task"));
  }
}

function* deleteTask(action: any): Generator {
  try {
    yield call(axios.delete, `${API}/todo/${action.payload._id}`); // { text, userId }

    yield put(deleteTaskSuccess({ _id: action.payload._id }));
  } catch (e: any) {
    yield put(deleteTaskFailed(e.message ?? "Failed to add task"));
  }
}
function* toggleTask(action: any): Generator {
  try {
    const res = yield call(
      axios.patch,
      `${API}/todo/${action.payload._id}/toggle`,
      { complete: action.payload.completed }
    );
    yield put(toggleTaskSuccess(res.data.data));
  } catch (error: any) {
    yield put(toggleTaskFailed(error.message ?? "Failed to toggle task"));
  }
}

//saga watcher function
export function* taskSaga() {
  yield takeEvery(fetchTasksRequested.type, fetchTasks);
  yield takeLatest(addTaskRequested.type, addTask);
  yield takeLatest(editTaskRequested.type, editTask);
  yield takeLatest(deleteTaskRequested.type, deleteTask);
  yield takeLatest(toggleTaskRequest.type, toggleTask);
}
