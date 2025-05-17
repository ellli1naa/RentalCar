import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getCars, getCarById, getBrands } from "../actions/carsActions";

const initialState = {
  cars: [],
  currentCar: null,
  brands: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.totalPages = payload.totalPages;
        if (state.page === 1) {
          state.cars = payload.cars;
        } else {
          state.cars = [...state.cars, ...payload.cars];
        }
      })
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.currentCar = payload;
      })
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.brands = payload;
      })
      .addMatcher(
        isAnyOf(getCars.pending, getBrands.pending, getCarById.pending),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getCars.rejected, getBrands.rejected, getCarById.rejected),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload || null;
        }
      );
  },
});

export const { resetCars, incrementPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
