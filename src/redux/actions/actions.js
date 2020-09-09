import { productsAPI } from "../../utils/api";

export const SET_ALL_PRODUCTS = " SET_ALL_PRODUCTS";
export const SET_FETCHING = " SET_FETCHING";

export const setFetching = (payload) => ({ type: SET_FETCHING, payload });
export const setProducts = (payload) => ({ type: SET_ALL_PRODUCTS, payload });
export const addNewProduct = (name, price, isAvailable) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    productsAPI.addProduct(name, price, isAvailable).then(() => {
      dispatch(getAllProducts());
      dispatch(setFetching(false));
    });
  };
};
export const getAllProducts = () => {
  return (dispatch) => {
    dispatch(setFetching(true));
    productsAPI.getAllProducts().then((data) => {
      dispatch(setProducts(data));
      dispatch(setFetching(false));
    });
  };
};
export const findById = (id) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    productsAPI.getProductByID(id).then((data) => {
      dispatch(setProducts([data]));
      dispatch(setFetching(false));
    });
  };
};
export const changeProductById = (id, body) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    productsAPI.editProduct(id, body).then(() => {
      dispatch(getAllProducts());
    });
  };
};
export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    productsAPI.deleteProductById(id).then(() => {
      dispatch(setFetching(false));
      dispatch(getAllProducts());
    });
  };
};
