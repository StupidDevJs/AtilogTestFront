import { call } from 'redux-saga/effects'
import {userAPI} from "../../utils/api";




export function* signUp(action) {
    try {
        const data = yield call(userAPI.signIn, action.payload.url)
    } catch (error) {
        console.log('zalupa')
    }
}
