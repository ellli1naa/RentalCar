import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./reducers/carsReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import { filtersReducer } from "./reducers/filtersReducer";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});
