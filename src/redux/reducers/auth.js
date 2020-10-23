import {SET_FETCHING, SIGN_IN} from "../actions/actionsTypes";

let initialState = {
    isAuth: false,
    currentUser: {
        name: '',
        lastname: ''
    },
    isFetching: false,
};
const auth = (state = initialState, {type, payload}) => {
    switch (type) {
        case SIGN_IN:
            return {
                ...state,
                currentUser: {...payload}
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