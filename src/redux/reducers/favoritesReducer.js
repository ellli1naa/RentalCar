import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  LOAD_FAVORITES,
} from "../actions/favoritesActions";

const initialState = {
  items: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        items: state.items.filter((car) => car._id !== action.payload),
      };
    case LOAD_FAVORITES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
