import { createSelector } from "reselect";

const param = (state, props) => props.match.params.category;
const products = (state) => state.products.products;
const categories = (state) => state.categories.categories;

const sortProductsByCategoryAndParam = (param, products, categories) => {
  const wantedCategory = categories?.find((item) => item.id === param);
  const filteredProducts = products.filter(
    (product) => product.category === wantedCategory.name
  );

  return filteredProducts;
};

const sortFourProductsByCategory = (products, categories) => {
  const categoriesName = categories.map((category) => category.name);
  const firstFourProducts = categoriesName.map((category) => {
    return {
      fourProducts: products
        .filter((item) => item.category === category)
        .slice(0, 4),
      category,
    };
  });
  return firstFourProducts;
};

export const getProductsByCategoryAndParam = () =>
  createSelector(param, products, categories, sortProductsByCategoryAndParam);

export const getFourProductsByCategory = () =>
  createSelector(products, categories, sortFourProductsByCategory);
