import { createSlice } from "@reduxjs/toolkit";
import { parseCategories } from "utils/parsers";

const productsSlice = createSlice({
  name: "products",
  initialState: { categories: [] },
  reducers: {
    setCategories(state, action) {
      state.categories = parseCategories(action.payload);
    },
  },
});

export const productActions = productsSlice.actions;
export default productsSlice;
