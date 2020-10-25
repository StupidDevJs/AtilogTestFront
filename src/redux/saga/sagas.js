import {call, takeLatest, put} from 'redux-saga/effects'
import {userAPI} from "../../utils/api";
import {authSucess, productsRequestFailed} from "../actions/actions";
import {AUTH_REQUEST} from "../actions/actionsTypes";

function* signIn(userData) {

    try {
        const {payload} = userData;

        const {data} = yield call(userAPI.signIn, payload);
        const {token} = data;
        localStorage.setItem('token', token);
        yield put(authSucess, data);
    } catch (err) {
        // yield put(productsRequestFailed, err);
        console.log(err)
    }
}

export default function* authSaga() {
    yield takeLatest(AUTH_REQUEST, signIn);
}
