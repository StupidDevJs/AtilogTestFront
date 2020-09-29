import {SET_USER, SET_FETCHING} from "../actions/actionsTypes";

let initialState = {
    currentUser: {
        name: '',
        lastname: 'Email'
    },
    isFetching: false,
};
const auth = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                name: payload
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