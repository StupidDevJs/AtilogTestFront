import {call, put, takeLatest} from 'redux-saga/effects'
import {userAPI} from "../../utils/api";
import {setFetching} from "../actions/actions";
import {SIGN_UP} from "../actions/actionsTypes";

function* signUp(userData) {

    if (userData) {
        const {payload} = userData;
        const data = yield call(userAPI.signUp, payload);
        // yield put(setFetching(true));
        console.log(data)
    }
}

export default function* authSaga() {
    yield takeLatest(SIGN_UP, signUp);
}
