import { GET_CATEGORIES, GET_RECIPES } from '../actions';

const INITIAL_STATE = {
  recipes: [],
  searched: false,
  categories: [],
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
  default:
    return state;
  }
};

export default recipes;
