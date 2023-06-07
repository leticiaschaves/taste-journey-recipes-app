import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';
import Footer from '../components/Footer';
import '../components/footer.css';
import { fetchRecipes } from '../redux/actions';

export default function Recipes() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const urlMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    dispatch(fetchRecipes(pathname === '/drinks' ? urlDrinks : urlMeals));
  }, []);

  const { recipes, searched } = useSelector((state) => state.recipes);

  let component = null;

  if (searched && pathname === '/drinks') {
    component = <Drinks data={ recipes } />;
  }
  if (searched && pathname === '/meals') {
    component = <Meals data={ recipes } />;
  }

  return (
    <div>
      <Header title={ pathname === '/drinks' ? 'Drinks' : 'Meals' } />
      {component}
      <Footer />
    </div>
  );
}
