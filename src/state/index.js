import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/reducers";
import { productsReducer } from "./products/reducers";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});
export default rootReducer;
