// ACTIONS TYPES
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_RECIPES = 'GET_RECIPES';

// ACTIONS CREATORS
export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const getRecipes = (payload) => ({
  type: GET_RECIPES,
  payload,
});

export const fetchRecipes = (url) => async (dispatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getRecipes(data));
  } catch (error) {
    console.log(error);
  }
};
