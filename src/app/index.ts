import { all, fork } from 'redux-saga/effects';
import { taskSaga } from "@saga/tasks"

export default function* rootSaga() {
  yield all([fork(taskSaga)]);
}