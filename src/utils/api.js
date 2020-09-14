import axios from "axios";
import { setFetching } from "../redux/actions/actions";
import store from "../redux/store";
const baseUrl = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});
const apiUrls = {
  products: `/products/`,
};
axiosInstance.interceptors.request.use(async (response) => {
  store.dispatch(setFetching(false));
  return response;
});

export const productsAPI = {
  getAllProducts() {
    return axiosInstance.get(apiUrls.products);
  },
  getProductByID(id) {
    return axiosInstance.get(`${apiUrls.products}${id}`);
  },
  addProduct(name, price, isAvailable) {
    return axiosInstance.post(`${apiUrls.products}`, {
      name,
      price,
      isAvailable,
    });
  },
  editProduct(id, data) {
    return axiosInstance.put(`${apiUrls.products}${id}`, data);
  },
  deleteProductById(id) {
    return axiosInstance.delete(`${apiUrls.products}${id}`);
  },
};
