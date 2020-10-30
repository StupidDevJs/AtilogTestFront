import {AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS} from "./actionsTypes";

export const authorize = (payload) => ({
    type: AUTH_REQUEST,
    payload
});
export const authSucess = (payload) => ({
    type: AUTH_SUCCESS,
    payload
});
export const authFailure = (payload) => ({
    type: AUTH_FAILURE,
    payload
});
