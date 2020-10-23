import {call, takeLatest, put} from 'redux-saga/effects'
import {userAPI} from "../../utils/api";
import {signInRequest} from "../actions/actions";
import { SIGN_IN } from '../actions/actionsTypes';

function* signIn(userData) {
   try {
    if (userData) {
        const {payload} = userData;
        const data = yield call(userAPI.signIn, payload);
        console.log(data);
        console.log(payload);
        yield put(signInRequest,data);
    }
   } catch(err){
       console.log(err);
   }
}

export default function* authSaga() {
    yield takeLatest(SIGN_IN, signIn);
}
