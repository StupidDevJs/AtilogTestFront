import {AUTH_FAILURE, AUTH_SUCCESS} from "../actions/actionsTypes";

let initialState = {
    isAuth: false,
    currentUser: {
        email: '',
    },
    err: false
};
const auth = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
                currentUser: {email: payload}
            };
        case AUTH_FAILURE:
            return {
                ...state,
                isAuth: false,
                currentUser: {email: ''},
                err: payload,
            };
        default:
            return state;
    }
};

export default auth;