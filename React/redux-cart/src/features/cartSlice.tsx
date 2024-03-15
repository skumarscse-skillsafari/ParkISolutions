import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // actions
    addToCart: (state: any, action: any) => {
      return { ...state, cart: [...state.cart, action.payload] };
    },
    removeFromCart: (state: any, action: any) => {
      return {
        ...state,
        cart: state.cart.filter(
          (product: any) => product.id !== action.payload
        ),
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
