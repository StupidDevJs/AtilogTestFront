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
// axiosInstance.interceptors.request.use(async (response) => {
//     console.log(response)
//     store.dispatch(setFetching());
//         const token = localStorage.getItem('token');
//         if (token) {
//             const isExpire = isExpireToken(token);
//             let requestWent = false;
//             if (isExpire && requestWent) {
//                 requestWent = true;
//                 const newToken = await getRefreshToken();
//                 localStorage.setItem('token', newToken);
//                 config.headers.Authorization = `Bearer ${newToken}`;
//                 requestWent = false;
//                 return config;
//             }
//             config.headers.Authorization = `Bearer ${token}`;
//             return config;
//         }
//         return config;
//     });

    axiosInstance.interceptors.response.use(
        (response) => {
            store.dispatch(setFetching());
            return response;
        },
        (reject) => {
            if (reject.response && reject.response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
            }

            const data = reject.response.data;

            if (reject.response.status !== 401) {
                if (data && data.field_errors) {
                    data.field_errors.forEach((error: any) => handleToast('error', error.message));
                } else if (data && data.errors) {
                    data.errors.forEach((error: any) => handleToast('error', error.message));
                } else {
                    handleToast('error', 'Something went wrong');
                }
            }

            store.dispatch(loadingOff());

            return reject;
        }
    );


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
    signUp({email,password}) {
        return axiosInstance.post(`${apiUrls.signUp}`,{
            email,password
        })
}
};
