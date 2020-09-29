import {Products} from './view/Products/';
import {EditProductPage} from "./view/EditProduct";
import  Register from "./view/Register";

export const urls = {
    home: '/',
    products: `/products`,
    register: `/register`,
    editProduct: '/editProduct/:id?'
}

export const routes = [
    {
        key: 'home',
        exact: true,
        path: urls.home,
        component: Products
    },
    {
        key: 'products',
        exact: true,
        path: urls.products,
        component: Products
    },
    {
        key: 'editProduct',
        exact: false,
        path: urls.editProduct,
        component: EditProductPage
    },
    {
        key: 'register',
        exact: true,
        path: urls.register,
        component: Register
    },
]