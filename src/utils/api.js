import axios from "axios";

const config = axios.create({
  baseURL: `http://localhost:8000/`, // TODO: add to .env
  withCredentials: true,
});

export const productsAPI = {
  //GET ALL
  getAllProducts() {
    return config.get(`products/`).then((response) => response.data);
  },
  //GET ONE BY ID
  getProductByID(id) {
    console.log(id);
    return config.get(`products/${id}`).then((response) => response.data);
  },
  //POST
  addProduct(name, price, isAvailable) {
    console.log(name, price, isAvailable);
    return config
      .post(`products/`, {
        name,
        price,
        isAvailable,
      })
      .then((response) => console.log(123));
  },
  //PUT
  editProduct(id, data) {
    return config.put(`products/${id}`, data).then((response) => response.data);
  },
  //DELETE
  deleteProductById(id) {
    return config.delete(`products/${id}`).then((response) => response.data);
  },
};
