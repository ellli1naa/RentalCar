import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars, getCarById, getBrands } from "../../api/carsApi";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (filters, { getState }) => {
    const { page } = getState().cars;
    const response = await getCars(filters, page);
    return response;
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id) => {
    const response = await getCarById(id);
    return response;
  }
);

export const getBrandsAction = createAsyncThunk(
  "cars/getBrands",
  async ({ carId, ...brandsData }, { rejectWithValue }) => {
    try {
      const response = await getBrands(carId, brandsData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
