// ACTIONS TYPES
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const REDIRECT_TO_DETAILS = 'REDIRECT_TO_DETAILS';

// ACTIONS CREATORS
export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const getRecipes = (payload) => ({
  type: GET_RECIPES,
  payload,
});

export const getCategories = (payload) => ({
  type: GET_CATEGORIES,
  payload,
});

export const redirectToDetails = (payload) => ({
  type: REDIRECT_TO_DETAILS,
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

export const fetchCategories = (url) => async (dispatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const categoryType = data.meals || data.drinks;
    const FIVE = 5;
    const dataSliced = categoryType.slice(0, FIVE);
    dispatch(getCategories(dataSliced));
  } catch (error) {
    console.log(error);
  }
};
