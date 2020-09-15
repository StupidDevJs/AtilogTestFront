import axios from "axios";

const baseUrl = `http://localhost:8000` // TODO: dotenv
console.log(baseUrl)
const axiosInstance = axios.create({
  baseURL: baseUrl,
});
const apiUrls = {
  products: `/products/`,
};
axiosInstance.interceptors.request.use(async (response) => {
  return response;
});

export const productsAPI = {
  getAllProducts  () {
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
