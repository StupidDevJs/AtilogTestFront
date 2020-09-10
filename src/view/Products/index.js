import { connect } from "react-redux";
import {
  addNewProduct,
  changeProductById,
  deleteProduct,
  findById,
  getAllProducts,
} from "../../redux/actions/actions";
import { Products } from "./Products";

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
