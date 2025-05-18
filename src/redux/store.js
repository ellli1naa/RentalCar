import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./reducers/carsReducer";
import { filtersReducer } from "./reducers/filtersReducer";
import { favouritesReducer } from "./reducers/favouritesReducer";

import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const favouritesPersistConfig = {
  key: "favourites",
  storage,
  whitelist: ["cars"],
};

const persistedFavouritesReducer = persistReducer(
  favouritesPersistConfig,
  favouritesReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favourites: persistedFavouritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
