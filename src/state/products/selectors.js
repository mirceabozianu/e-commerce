import { createSelector } from "reselect";

const categoryParam = (state, props) => props.match.params.category;
const idParam = (state, props) => props.match.params.id;
const products = (state) => state.products.products;
const categories = (state) => state.categories.categories;
const selectedCategory = (state, props) => props.category;

const sortProductsByCategoryAndParam = (
  categoryParam,
  products,
  categories
) => {
  const wantedCategory = categories?.find((item) => item.id === categoryParam);
  const filteredProducts = products?.filter(
    (product) => product.category === wantedCategory?.name
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

const getMatchingCategory = (categories, selectedCategory) => {
  const matchedCategory = categories.find(
    (category) => category.name === selectedCategory
  );
  return matchedCategory.path;
};

const sortProductById = (products, idParam) => {
  return products?.find((product) => product.id === Number(idParam));
};

export const getProductById = () =>
  createSelector(products, idParam, sortProductById);

export const getMatchingPath = () =>
  createSelector(categories, selectedCategory, getMatchingCategory);

export const getProductsByCategoryAndParam = () =>
  createSelector(
    categoryParam,
    products,
    categories,
    sortProductsByCategoryAndParam
  );

export const getFourProductsByCategory = () =>
  createSelector(products, categories, sortFourProductsByCategory);
