import {Products} from './view/Products/';

export const urls = {
    home: '/',
    products: `/products`,
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
]