import { GET_RECIPES } from '../actions';

const INITIAL_STATE = {
  recipes: [],
  searched: false,
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
  default:
    return state;
  }
};

export default recipes;
