import { createSelector } from "reselect";

const param = (state, props) => props.match.params.category;
const products = (state) => state.products.products;
const categories = (state) => state.categories.categories;

const sortProductsByCategory = (param, products, categories) => {
  const wantedCategory = categories?.find((item) => item.id === param);
  const filteredProducts = products.filter(
    (product) => product.category === wantedCategory.name
  );

  return filteredProducts;
};

export const getProductsByCategory = () =>
  createSelector(param, products, categories, sortProductsByCategory);
