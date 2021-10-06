import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/reducers";

const rootReducer = combineReducers({
  categories: categoriesReducer,
});
export default rootReducer;
