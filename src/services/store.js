import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "state/state";

export default configureStore({
  reducer: { products: productsSlice.reducer },
});
