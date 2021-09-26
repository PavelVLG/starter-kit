import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import { E_CaseAuth } from "../rootState/interface";

const start = () => console.log("Store working, saga connected")

function* sagaWorker() {
    yield put({ type: E_CaseAuth.IS_LOADING, payload: true });
    yield call(start);
}

export function* sagaWatcher() {
    yield takeEvery(E_CaseAuth.INIT_APP, sagaWorker);
}

export function* appSaga() {
    yield all([fork(sagaWatcher)]);
}

