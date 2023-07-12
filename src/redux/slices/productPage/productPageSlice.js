import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsData } from './productPageThunk';

const productPageSlice = createSlice({
  name: 'productPage',
  initialState: {
    products: [],
    wishlistData: [],
  },
  reducers: {
    updateWishlist: (state, action) => {
      const productId = action.payload;
      if (!state.wishlistData.includes(productId)) {
        state.wishlistData.push(productId);
      }
    },
    removeWishlistItem: (state, action) => {
      const productId = action.payload;
      state.wishlistData = state.wishlistData.filter((item) => item !== productId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsData.fulfilled, (state, action) => {
      state.products = action.payload.products;
    });
  },
});

export const { updateWishlist, removeWishlistItem } = productPageSlice.actions;

export default productPageSlice.reducer;
