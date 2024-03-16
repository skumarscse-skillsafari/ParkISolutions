import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/cartSlice";
import productsSlice from "../features/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    products: productsSlice,
  },
});

export default store;
