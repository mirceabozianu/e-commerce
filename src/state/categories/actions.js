import { getCategories } from "services/api";
import { parseCategories } from "utils/parsers";

export function setCategories() {
  return async (dispatch, getState) => {
    const categories = await getCategories();

    dispatch({
      type: "DASHBOARD_SET_CATEGORIES",
      payload: parseCategories(categories),
    });
  };
}
