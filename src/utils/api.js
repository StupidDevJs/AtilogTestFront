import axios from "axios";



const config = axios.create({
  baseURL: `http://localhost:8000`, // TODO: add to .env
  withCredentials: true,
});
const apiUrls = {
  products: `/products/`,
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
