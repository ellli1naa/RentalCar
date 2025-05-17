import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "../actions/favoritesActions";

const initialState = {
  brand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
  brandsList: [],
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      const { brand, price, mileageFrom, mileageTo } = action.payload;
      state.brand = brand;
      state.price = price;
      state.mileageFrom = mileageFrom;
      state.mileageTo = mileageTo;
    },
    clearFilters(state) {
      state.brand = "";
      state.price = "";
      state.mileageFrom = "";
      state.mileageTo = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brandsList = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
