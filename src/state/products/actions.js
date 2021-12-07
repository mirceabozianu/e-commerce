import { getProducts } from "services/api";
import { multiplyProducts } from "utils/functions";
import { replaceCategoryName } from "utils/parsers";

export const setProducts = () => {
  return async (dispatch) => {
    const products = await getProducts();

    const newProducts = replaceCategoryName(products);

    dispatch({
      type: "SET_PRODUCTS",
      payload: multiplyProducts(newProducts, 3),
    });
  };
};
