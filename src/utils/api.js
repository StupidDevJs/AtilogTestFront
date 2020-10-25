import axios from "axios";
import {setFetching} from "../redux/actions/actions";

const baseUrl = `http://localhost:8000` // TODO: dotenv
const axiosInstance = axios.create({
    baseURL: baseUrl,
});
const apiUrls = {
    products: `/products/`,
    signUp: `/sign-up`,
    signIn: `/sign-in`,
};


axiosInstance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }
    return config;
});


// axiosInstance.interceptors.request.use(async (config: any) => {
//     //@ts-ignore
//     store.dispatch(loadingOn());
//     const token = localStorage.getItem('token');
//
//     if (token) {
//         const isExpire = isExpireToken(token);
//         let requestWent = false;
//
//         if (isExpire && requestWent) {
//             requestWent = true;
//             const newToken = await getRefreshToken();
//             localStorage.setItem('token', newToken);
//             config.headers.Authorization = `Bearer ${newToken}`;
//             requestWent = false;
//             return config;
//         }
//
//         config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     }
//
//     return config;
// });

axiosInstance.interceptors.response.use(
    (response) => {
        // store.dispatch(setFetching(false));

        return response;
    },
    (reject) => {
        return reject;
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
    deleteProductById(id) {
        return axiosInstance.delete(`${apiUrls.products}${id}`);
    },
};
export const userAPI = {
    signUp({email, password}) {
        return axiosInstance.post(`${apiUrls.signUp}`, {
            email, password
        })
    },
    signIn({email, password}) {
        return axiosInstance.post(`${apiUrls.signIn}`, {
            email, password
        })
    }
};
