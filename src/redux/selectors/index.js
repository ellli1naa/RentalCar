export const selectCars = (state) => state.cars.cars || [];
export const selectCurrentCar = (state) => state.cars.currentCar;
export const selectCarsBrands = (state) => state.cars.brands;
export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;

export const selectFavourites = (state) => state.favourites;

export const selectFilters = (state) => state.filters;
export const selectBrandsList = (state) => state.filters.brandsList;
export const selectFiltersLoading = (state) => state.filters.isLoading;
export const selectFiltersError = (state) => state.filters.error;
