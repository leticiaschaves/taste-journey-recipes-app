import { GET_CATEGORIES, GET_RECIPES, REDIRECT_TO_DETAILS } from '../actions';

const INITIAL_STATE = {
  recipes: [],
  searched: false,
  categories: [],
  filteredByCategory: true,
};

const recipes = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case GET_RECIPES:
    return {
      ...state,
      recipes: payload,
      searched: true,
    };
  case GET_CATEGORIES:
    return {
      ...state,
      categories: payload,
    };
  case REDIRECT_TO_DETAILS:
    return {
      ...state,
      filteredByCategory: payload,
    };
  default:
    return state;
  }
};

export default recipes;
