import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // actions
    // initProducts: (state: any, action: any) => {
    // action => {payload: }
    // { products: [], cart: [] }
    // return { ...state, products: action.payload };
    // },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getProducts.fulfilled, (state: any, action: any) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state: any) => {
        state.status = "error";
      })
      .addCase(getProducts.pending, (state: any) => {
        state.status = "loading";
      });
  },
});

// export const { initProducts } = productsSlice.actions;

export const getProducts: any = createAsyncThunk("products/get", async () => {
  const result = await axios.get("https://fakestoreapi.com/products");
  const products = result.data;
  return products;
});

export default productsSlice.reducer;
