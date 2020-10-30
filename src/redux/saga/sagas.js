import {call, takeLatest, put} from 'redux-saga/effects'
import {userAPI} from "../../utils/api";
import {authSucess, authFailure} from "../actions/actions";
import {AUTH_REQUEST} from "../actions/actionsTypes";

function* signIn({payload}) {
    try {
        const {data} = yield call(userAPI.signIn, payload);
        const {token} = data;
        const {email} = payload
        localStorage.setItem('token', token);
        yield put(authSucess(email));
    } catch (err) {
        const {message} = new Error('Something Wrong! Try again later')
        yield put(authFailure(message));
    }
}

export default function* authSaga() {
    yield takeLatest(AUTH_REQUEST, signIn);
}
