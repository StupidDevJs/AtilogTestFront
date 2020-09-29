import axios from "axios";

const baseUrl = `http://localhost:8000` // TODO: dotenv
const axiosInstance = axios.create({
    baseURL: baseUrl,
});
const apiUrls = {
    products: `/products/`,
    signUp: `/sign-up`,
    signIn: `/sign-in`,
};
axiosInstance.interceptors.request.use(async (response) => {

    return response;

});

export const productsAPI = {
    getAllProducts() {
        return axiosInstance.get(apiUrls.products);
    },
    getProductByID(id) {
        return axiosInstance.get(`${apiUrls.products}${id}`);
    },
    addProduct({name, price, isAvailable, description}) {
        return axiosInstance.post(`${apiUrls.products}`, {
            name,
            price,
            isAvailable,
            description
        });
    },
    editProduct(id, data) {
        return axiosInstance.put(`${apiUrls.products}${id}`, data);
    },
    register({name,email}) {
        return axiosInstance.post(`${apiUrls.register}`, {name,email});
    },
    deleteProductById(id) {
        return axiosInstance.delete(`${apiUrls.products}${id}`);
    },
};
export const userAPI = {
    signIn({name,password}) {
        return axios.Instance.post(`${apiUrls.signIn}`,{
            name,password
        })
}
};
