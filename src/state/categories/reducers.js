const initialState = {
  categories: [],
};
export const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DASHBOARD_SET_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
