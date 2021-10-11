import { getCategories } from "services/api";
import { parseCategories } from "utils/parsers";

export const setCategories = () => {
  return async (dispatch) => {
    const categories = await getCategories();

    dispatch({
      type: "DASHBOARD_SET_CATEGORIES",
      payload: parseCategories(categories),
    });
  };
};
