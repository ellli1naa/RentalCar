export const selectCars = (state) => state.cars.items;
export const selectCurrentCar = (state) => state.cars.currentCar;
export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectHasMore = (state) => state.cars.hasMore;

export const selectFavorites = (state) => state.favorites.items;

export const selectFilters = (state) => state.filters;
