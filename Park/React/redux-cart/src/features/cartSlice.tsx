import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      //   state.cart.push(action.payload);
      return { ...state, cart: [...state.cart, action.payload] };
    },
    removeFromCart: (state: any, action: any) => {
      //   state.cart = state.cart.filter((c: any) => c.id !== +action.payload);
      return {
        ...state,
        cart: state.cart.filter((c: any) => c.id !== +action.payload),
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
