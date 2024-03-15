import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});

export default store;
