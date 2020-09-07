import Product from './view/Products/';

export const urls = {
    home: '/',
    products: `/products`,
}

export const routes = [
    {
        key: 'home',
        exact: true,
        path: urls.home,
        component: Product
    },
    {
        key: 'products',
        exact: true,
        path: urls.products,
        component: Product
    },
]