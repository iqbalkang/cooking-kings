import { createAsyncThunk } from '@reduxjs/toolkit';

import customFetch from '../../utils/axios/customFetch';

export const getMenuCategories = createAsyncThunk('menu/getMenuCategories', async (_, thunkAPI) => {
  try {
    const { data } = await customFetch.get(`/category`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCategoryItems = createAsyncThunk('menu/getCategoryItems', async (category, thunkAPI) => {
  try {
    const { data } = await customFetch.get(`/item?category=${category}`);
    return { data, category };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
