import axios from "axios";

const config = axios.create({
  baseURL: `http://localhost:8000`, // TODO: add to .env
  withCredentials: true,
});
const apiUrls = {
  products: `/products`,
}
export const productsAPI = {
  getAllProducts() {
    return config.get(`products`).then((response) => response.data);
  },
  getProductByID(id) {
    console.log(id);
    return config.get(`products/${id}`).then((response) => response.data);
  },
  addProduct(name, price, isAvailable) {
    return config
      .post( `products`,{
        name,
        price,
        isAvailable,
      })
      .then(() => console.log('done'));
  },
  editProduct(id, data) {
    return config.put(`products/${id}`, data).then((response) => response.data);
  },
  deleteProductById(id) {
    return config.delete(`products/${id}`).then((response) => response.data);
  },
};
