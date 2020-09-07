import axios from "axios";
const dotenv = import('dotenv').config()

const serverUrl = process.env.API_URL
const config = axios.create({
  baseURL: serverUrl, // TODO: add to .env
  withCredentials: true,
});

const apiUrls = {
  products: `${serverUrl}/products`,
}

export const productsAPI = {
  getAllProducts() {

    return config.get(apiUrls.products).then((response) => response.data);
  },
  getProductByID(id) {
    console.log(id);
    return config.get(`${apiUrls.products}${id}`).then((response) => response.data);
  },
  addProduct(name, price, isAvailable) {
    console.log(name, price, isAvailable);
    return config
      .post(`${apiUrls.products}`, {
        name,
        price,
        isAvailable,
      })
      .then(() => console.log('done'));
  },
  editProduct(id, data) {
    return config.put(`${apiUrls.products}${id}`, data).then((response) => response.data);
  },
  deleteProductById(id) {
    return config.delete(`${apiUrls.products}${id}`).then((response) => response.data);
  },
};
