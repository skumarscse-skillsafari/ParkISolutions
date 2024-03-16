import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // initProducts: (state: any, action: any) => {
    //   //   state.products = action.payload;
    //   return { ...state, products: action.payload };
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

// export const { initProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const getProducts: any = createAsyncThunk("products/get", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const result = await res.json();
  // console.log(data);
  return result;
});
