import React from "react";
import { connect } from "react-redux";
import {
  getAllProducts,
  deleteProduct,
  addNewProduct,
  findById,
  changeProductById,
} from "../../redux/actions/actions";

class Products extends React.Component {
  state = {
    etalonProductsArr: [],
    temporaryId: "",
    temporaryName: "",
    temporaryAvailability: "",
    temporaryPrice: "",
  };

  showAllProducts = () => {
    this.props.getAllProducts();
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.products !== this.props.products) {
      this.setState({ etalonProductsArr: this.props.products });
    }
  }
  changeTemporaryId = (e) => {
    this.setState({
      temporaryId: e.target.value,
    });
  };
  delFromBdById = () => {
    if (this.state.temporaryId) {
      this.props.deleteProduct(this.state.temporaryId);
    }
  };
  changeName = (e) => {
    this.setState({
      temporaryName: e.target.value,
    });
  };
  changeAvailability = (e) => {
    this.setState({
      temporaryAvailability: e.target.value,
    });
  };
  changePrice = (e) => {
    this.setState({
      temporaryPrice: e.target.value,
    });
  };
  addToBd = () => {
    if (
      (this.state.temporaryName,
      this.state.temporaryPrice,
      this.state.temporaryAvailability)
    ) {
      this.props.addNewProduct(
        this.state.temporaryName,
        this.state.temporaryPrice,
        this.state.temporaryAvailability
      );
    }
  };
  findById = () => {
    if (this.state.temporaryId) {
      this.props.findById(this.state.temporaryId);
    }
  };
  editById = () => {
    if (this.state.temporaryId) {
      let reqBody = {
        name: this.state.temporaryName,
        price: this.state.temporaryPrice,
        isAvailable: this.state.temporaryAvailability,
      };
      this.props.changeProductById(this.state.temporaryId, reqBody);
    }
  };
  componentDidMount() {
    this.showAllProducts();
  }

  render() {
    const items = this.state.etalonProductsArr.map((item, index) => {
      const { _id, name, price, isAvailable } = item || {};
      return (
        <div
          style={{
            fontSize: `15px`,
            border: "1px solid black",
            margin: "10px 0 0 0",
            textAlign: "center",
          }}
        >
          <p>{name}</p>
          <p>{price}</p>
          <p>{isAvailable.toString()}</p>
          <p>{_id}</p>
        </div>
      );
    });

    return (
      <div>
        <div>
          <p> enter id to do something</p>
          <input
            onChange={this.changeTemporaryId}
            value={this.state.idToDelete}
          />
          <button onClick={this.showId}>watchId</button>
        </div>
        <div>
          <button onClick={this.showAllProducts}>Get all</button>
        </div>
        <div>
          <button onClick={this.delFromBdById}>Delete By id</button>
        </div>
        <div>
          <button onClick={this.findById}>Find By id</button>
        </div>
        <div>
          <button onClick={this.addToBd}>add</button>
          <input
            type="text"
            value={this.state.temporaryName}
            placeholder={`enter product name`}
            onChange={this.changeName}
          />
          <input
            type="text"
            value={this.state.temporaryPrice}
            placeholder={`enter product's price`}
            onChange={this.changePrice}
          />
          <input
            type="text"
            value={this.state.temporaryAvailability}
            placeholder={`enter product's availability`}
            onChange={this.changeAvailability}
          />
        </div>
        <button onClick={this.editById}>EditById</button>
        {items ? items : null}
      </div>
    );
  }
}

const mStP = (state) => {
  return {
    products: state.products.products,
    isFetching: state.products.isFetching,
  };
};

export default connect(mStP, {
  getAllProducts,
  deleteProduct,
  addNewProduct,
  findById,
  changeProductById,
})(Products);
