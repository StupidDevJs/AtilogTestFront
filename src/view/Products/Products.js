import React from "react";
import {connect} from "react-redux";
import {getAllProducts} from "../../redux/actions/actions";


class Products extends React.Component {

    state = {
       etalonProductsArr : [],
    }

    componentDidMount() {
        this.props.getAllProducts();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            console.log(`newprops`,this.props);
            this.setState({etalonProductsArr:this.props.products})
        }
    }

    render () {
        return (
            <div>
                "hi hi hi"
            </div>
        )
    }
}

const mStP = (state) => {
    return {
        products: state.products.products,
        isFetching: state.products.isFetching,
    }
};

export default connect(mStP, {getAllProducts})(Products);