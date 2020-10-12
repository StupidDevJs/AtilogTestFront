import {all} from "redux-saga/effects";
import authSaga from "./sagas";


export default function* sagas() {
    yield all([authSaga()])
}