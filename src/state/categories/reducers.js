const initialState = {
  categories: [],
};
export const categoriesReducer = (state = initialState, { type, payload }) => {
  if (type === "SET_CATEGORIES") {
    return {
      ...state,
      categories: payload,
    };
  }
  return state;
};
