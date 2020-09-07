import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import productsReduser from "./reducers/productsReducers";
import ReduxThunk from "redux-thunk";
let reducers = combineReducers({
  products: productsReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(ReduxThunk))
);
window.store = store;

export default store;
