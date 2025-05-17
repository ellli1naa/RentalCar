import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrands = createAsyncThunk(
  "filters/getBrands",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://car-rental-api.goit.global/brands"
      );
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
