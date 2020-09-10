import { SET_ALL_PRODUCTS, SET_FETCHING } from "./actionsTypes";
import { productsAPI } from "../../utils/api";

export const setFetching = (payload) => ({ type: SET_FETCHING, payload });
export const setProducts = (payload) => ({ type: SET_ALL_PRODUCTS, payload });
export const addNewProduct = (name, price, isAvailable) => {
  return async (dispatch) => {
    const resp = await productsAPI.addProduct(name, price, isAvailable);
    if (resp.status >= 200 && resp.status < 300) {
      dispatch(await getAllProducts());
    }
  };
};
export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    const resp = await productsAPI.getAllProducts();
    if (resp.status >= 200 && resp.status < 300) {
      dispatch(setProducts(resp.data));
    }
  };
};
export const findById = (id) => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    const resp = await productsAPI.getProductByID(id);
    if (resp.status >= 200 && resp.status < 300) {
      dispatch(setProducts([resp.data]));
    }
  };
};
export const changeProductById = (id, body) => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    const resp = productsAPI.editProduct(id, body);
    if (resp.status >= 200 && resp.status < 300) {
      dispatch(getAllProducts());
    }
  };
};
export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    const resp = await productsAPI.deleteProductById(id);
    if (resp.status >= 200 && resp.status < 300) {
      dispatch(getAllProducts());
    }
  };
};
