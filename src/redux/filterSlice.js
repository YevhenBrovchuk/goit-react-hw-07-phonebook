import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    applyFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { applyFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
