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
  const { products, isFetching } = state.products;
  return {
    products,
    isFetching,
  };
};
export default connect(mStP, {
  getAllProducts,
  deleteProduct,
  addNewProduct,
  findById,
  changeProductById,
})(Products);
