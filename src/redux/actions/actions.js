import { SET_ALL_PRODUCTS, SET_FETCHING } from "./actionsTypes";
import { productsAPI } from "../../utils/api";

export const setFetching = (payload) => ({ type: SET_FETCHING, payload });
export const setProducts = (payload) => ({ type: SET_ALL_PRODUCTS, payload });
export const addNewProduct = (name, price, isAvailable) => {
  return async (dispatch) => {
    try {
      const resp = await productsAPI.addProduct(name, price, isAvailable);
      if (resp.status >= 200 && resp.status < 300) {
        dispatch(await getAllProducts());
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(setFetching(true));
      const resp = await productsAPI.getAllProducts();
      if (resp.status >= 200 && resp.status < 300) {
        dispatch(setProducts(resp.data));
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
export const findById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setFetching(true));
      const resp = await productsAPI.getProductByID(id);
      if (resp.status >= 200 && resp.status < 300) {
        dispatch(setProducts([resp.data]));
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
export const changeProductById = (id, body) => {
  return async (dispatch) => {
    try {
      dispatch(setFetching(true));
      const resp = await productsAPI.editProduct(id, body);
      if (resp.status >= 200 && resp.status < 300) {
        console.log(resp.status);
        dispatch(getAllProducts());
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setFetching(true));
      const resp = await productsAPI.deleteProductById(id);
      if (resp.status >= 200 && resp.status < 300) {
        dispatch(getAllProducts());
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
