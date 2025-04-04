import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/data/products.json"); // Replace with actual API
      console.log('response',response);
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch products");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.filteredProducts = state.products.filter((product) => {
        return (
          (!action.payload.category ||
            action.payload.category.includes(product.type)) &&
          (!action.payload.price || product.price <= action.payload.price) &&
          (!action.payload.search ||
            product.name
              .toLowerCase()
              .includes(action.payload.search.toLowerCase()))
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;