import {call, takeLatest, put} from 'redux-saga/effects'
import {userAPI} from "../../utils/api";
import {SIGN_UP} from "../actions/actionsTypes";

function* signUp(userData) {
    if (userData) {
        console.log('i am saga')
        const {payload} = userData;
        // const response = yield userAPI.signUp(payload);
        const {data} = yield call(userAPI.signUp, payload);
        yield put(doAuth())
        console.log(data);
    }
}

export default function* authSaga() {
    yield takeLatest(SIGN_UP, signUp);
}
