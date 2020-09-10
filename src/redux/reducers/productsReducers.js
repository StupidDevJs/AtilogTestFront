import { SET_ALL_PRODUCTS, SET_FETCHING } from "../actions/actionsTypes";

let initialState = {
  products: [],
  isFetching: true,
};
const productsReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        products: [...payload],
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

export default productsReduser;
