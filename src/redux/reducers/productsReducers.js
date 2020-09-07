import { SET_ALL_PRODUCTS, SET_FETCHING } from "../actions/actions";

let initialState = {
  products: [],
  isFetching: true,
};
const productsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
};

export default productsReduser;
