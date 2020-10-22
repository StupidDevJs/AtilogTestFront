import {SET_USER, SET_FETCHING, SIGN_UP} from "../actions/actionsTypes";

let initialState = {
    isAuth: false,
    currentUser: {
        name: '',
        lastname: ''
    },
    isFetching: false,
};
const auth = (state = initialState, {type, payload}) => {
    console.log(payload)
    switch (type) {
        case SIGN_UP:
            return {
                ...state,
                ...payload
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: payload,
            };
        default:
            return state;
    }
};

export default auth;