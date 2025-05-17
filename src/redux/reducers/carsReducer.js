import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCars,
  fetchCarById,
  getBrandsAction,
} from "../actions/carsActions";

const initialState = {
  items: [],
  currentCar: null,
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
  // initialized: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars: (state) => {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.initialized = true;
        state.items = [...state.items, ...action.payload];
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.initialized = true;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBrandsAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBrandsAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getBrandsAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCars, incrementPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
