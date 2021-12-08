import { createSelector } from "reselect";

export const getProductById = createSelector(
  (state) => state.products.products,
  (state, props) => props.match.params.id,
  (state, props) => props.match.params.category,
  (products, idParam, categoryParam) => {
    return products.find(
      (product) =>
        product.id === Number(idParam) && product.category === categoryParam
    );
  }
);

export const getProductsByCategoryParam = createSelector(
  (state, props) => props.match.params.category,
  (state) => state.products.products,
  (category, products) => {
    return products?.filter((item) => item.category === category);
  }
);

export const getFourProductsByCategory = createSelector(
  (state) => state.products.products,
  (state) => state.categories.categories,
  (products, categories) => {
    const categoriesName = categories.map((category) => category.id);
    return categoriesName.map((category) => {
      return {
        fourProducts: products
          .filter((item) => item.category === category)
          .slice(0, 4),
        category,
      };
    });
  }
);
