import {Products} from './view/Products/';
import {EditProductPage} from "./view/EditProduct";
import {SignUp, SignIn} from "./view/Auth/";


export const urls = {
    home: '/',
    products: `/products`,
    signUp: `/signUp`,
    signIn: `/signIn`,
    editProduct: '/editProduct/:id?'
}

export const routes = [
    {
        key: 'home',
        exact: true,
        path: urls.home,
        component: Products,
        isPrivate: true,
    },
    {
        key: 'products',
        exact: true,
        path: urls.products,
        component: Products,
        isPrivate: true,
    },
    {
        key: 'editProduct',
        exact: false,
        path: urls.editProduct,
        component: EditProductPage,
        isPrivate: true,
    },
    {
        key: 'signUp',
        exact: true,
        path: urls.signUp,
        component: SignUp,
        isPrivate: false,
    },
    {
        key: 'signIn',
        exact: true,
        path: urls.signIn,
        component: SignIn,
        isPrivate: false,
    },
]