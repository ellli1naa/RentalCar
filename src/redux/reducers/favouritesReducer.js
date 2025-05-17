import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favourites")) || [];

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const index = state.findIndex((car) => car.id === action.payload.id);
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(action.payload);
      }
      localStorage.setItem("favourites", JSON.stringify(state));
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
