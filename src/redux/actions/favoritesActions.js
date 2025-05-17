import { loadState, saveState } from "../../utils/localStorage";

export const ADD_FAVORITE = "favorites/addFavorite";
export const REMOVE_FAVORITE = "favorites/removeFavorite";
export const LOAD_FAVORITES = "favorites/loadFavorites";

export const addFavorite = (car) => (dispatch) => {
  dispatch({
    type: ADD_FAVORITE,
    payload: car,
  });
  dispatch(saveFavorites());
};

export const removeFavorite = (carId) => (dispatch) => {
  dispatch({
    type: REMOVE_FAVORITE,
    payload: carId,
  });
  dispatch(saveFavorites());
};

export const loadFavorites = () => (dispatch) => {
  const favorites = loadState("favorites") || [];
  dispatch({
    type: LOAD_FAVORITES,
    payload: favorites,
  });
};

const saveFavorites = () => (_, getState) => {
  const { items } = getState().favorites;
  saveState("favorites", items);
};
