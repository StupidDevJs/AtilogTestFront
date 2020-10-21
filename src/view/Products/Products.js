import React, {Component} from "react";
import {ProductCard} from "../../components/ProductCard";
import {productsAPI} from "../../utils/api";
import './Products.scss'

export class Products extends Component {
    state = {
        products: []
    }
    getAll = async () => {
        // const {data} = await productsAPI.getAllProducts()
        // if (data) {
        //     this.setState({products: data})
        // }
    }

    deleteItem = async (id) => {
        await productsAPI.deleteProductById(id);
        const {data} = await productsAPI.getAllProducts();
        this.setState({products: data})
    }

    componentDidMount() {
        this.getAll();
    }

    render() {
        const {products} = this.state;

        const cards = products.map(item => {
            return <ProductCard product={item} key={item._id} deleteItem={this.deleteItem}/>
        })
        return (
            <div style={{"margin": '100px 0 0 0'}}>
                <div className='products_container'>
                    {cards}
                </div>
            </div>

        )
    }
}

