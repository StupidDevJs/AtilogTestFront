import {PRODUCTS_REQUEST_FAILED, SIGN_IN} from "../actions/actionsTypes";

let initialState = {
    isAuth: false,
    currentUser: {
        name: '',
    },
    err: false
};
const auth = (state = initialState, {type, payload}) => {
    console.log(type, payload)
    switch (type) {
        case PRODUCTS_REQUEST_FAILED:
            return {
                ...state,
                isFetching: payload,
            };
        default:
            return state;
    }
};

export default auth;