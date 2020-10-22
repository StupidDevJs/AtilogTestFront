import {call, takeLatest, put} from 'redux-saga/effects'
import {userAPI} from "../../utils/api";
import {SIGN_UP} from "../actions/actionsTypes";
import {signUpRequest} from "../actions/actions";

function* signUp(userData) {
    if (userData) {
        const {payload} = userData;
        const {data} = yield call(userAPI.signUp, payload);
        yield put(signUpRequest,data);
    }
}

export default function* authSaga() {
    yield takeLatest(SIGN_UP, signUp);
}
