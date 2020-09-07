import {SET_ALL_PRODUCTS, SET_FETCHING,} from "../actions/actions";



let initialState = {
    products: [],
    totalProductsCount: 0,
    isFetching: true,

};

const productsReduser = (state = initialState, type, payload) => {

    switch (type) {
        case SET_ALL_PRODUCTS:
            console.log(type)
            return {
                ...state,
                products: [...payload]
            }
        case SET_FETCHING:
            console.log(type)
            return {
                ...state,
                isFetching: payload
            }
        default:
            return state;
    }
};



export default productsReduser;
