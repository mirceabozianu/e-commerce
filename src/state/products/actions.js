import { getProducts } from "services/api";
import { multiplyProducts } from "utils/functions";

export const setProducts = () => {
  return async (dispatch) => {
    const products = await getProducts();

    dispatch({
      type: "SET_PRODUCTS",
      payload: multiplyProducts(products, 3),
    });
  };
};
