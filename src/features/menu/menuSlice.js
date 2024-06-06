import { createSlice } from '@reduxjs/toolkit';
import { getCategoryItems, getMenuCategories } from './menuThunks';

const initialState = {
  categories: [],
  categoryItems: [],
  selectedCategory: '',
  isLoading: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // get menu categories
      .addCase(getMenuCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMenuCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories = [...payload];
      })
      .addCase(getMenuCategories.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })

      // get category items
      .addCase(getCategoryItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryItems.fulfilled, (state, { payload }) => {
        const { data, category } = payload;
        state.isLoading = false;
        state.selectedCategory = category;
        state.categoryItems = [...data];
      })
      .addCase(getCategoryItems.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export default menuSlice.reducer;
