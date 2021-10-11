import { getProducts } from "services/api";

export const setProducts = () => {
  return async (dispatch) => {
    const products = await getProducts();

    dispatch({
      type: "SET_PRODUCTS",
      payload: products,
    });
  };
};
