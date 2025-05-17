import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => {
      return {};
    },
  },
});

export const { updateFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
