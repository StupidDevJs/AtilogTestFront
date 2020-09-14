import React, { Component } from "react";

export class Products extends Component {
  state = {
    etalonProductsArr: [],
    temporaryId: "",
    temporaryName: "",
    temporaryAvailability: "",
    temporaryPrice: "",
  };

  showAllProducts = () => {
    const { getAllProducts } = this.props;
    getAllProducts();
  };

  componentDidUpdate(prevProps) {
    const { products } = this.props;
    if (prevProps.products !== this.props.products) {
      this.setState({ etalonProductsArr: products });
    }
  }

  changeTemporaryId = (value) => {
    this.setState({
      temporaryId: value,
    });
  };
  delFromBdById = () => {
    const { deleteProduct } = this.props;
    const { temporaryId } = this.state;
    if (temporaryId) {
      deleteProduct(temporaryId);
    }
  };
  changeName = (value) => {
    this.setState({
      temporaryName: value,
    });
  };
  changeAvailability = (value) => {
    this.setState({
      temporaryAvailability: value,
    });
  };
  changePrice = (value) => {
    this.setState({
      temporaryPrice: value,
    });
  };
  addToBd = () => {
    const { temporaryName, temporaryPrice, temporaryAvailability } = this.state;
    const { addNewProduct } = this.props;
    if (temporaryName && temporaryPrice && temporaryAvailability) {
      addNewProduct(temporaryName, temporaryPrice, temporaryAvailability);
    }
  };
  findById = () => {
    const { temporaryId } = this.state;
    const { findById } = this.props;
    if (temporaryId) {
      findById(temporaryId);
    }
  };
  editById = () => {
    const {
      temporaryName,
      temporaryPrice,
      temporaryAvailability,
      temporaryId,
    } = this.state;
    const { changeProductById } = this.props;
    if (temporaryId) {
      let reqBody = {
        name: temporaryName,
        price: temporaryPrice,
        isAvailable: temporaryAvailability,
      };
      changeProductById(temporaryId, reqBody);
    }
  };

  componentDidMount() {
    this.showAllProducts();
  }

  render() {
    const {
      idToDelete,
      temporaryName,
      temporaryPrice,
      temporaryAvailability,
    } = this.state;
    const items = this.state.etalonProductsArr.map((item) => {
      const { _id, name, price, isAvailable } = item || {};
      return (
        <div
          key={_id}
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
            onChange={(e) => this.changeTemporaryId(e.target.value)}
            value={idToDelete}
          />
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
            value={temporaryName}
            placeholder={`enter product name`}
            onChange={(e) => this.changeName(e.target.value)}
          />
          <input
            type="text"
            value={temporaryPrice}
            placeholder={`enter product's price`}
            onChange={(e) => this.changePrice(e.target.value)}
          />
          <input
            type="text"
            value={temporaryAvailability}
            placeholder={`enter product's availability`}
            onChange={(e) => this.changeAvailability(e.target.value)}
          />
        </div>
        <button onClick={this.editById}>EditById</button>
        {items ? items : null}
      </div>
    );
  }
}
