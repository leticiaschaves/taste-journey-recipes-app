import React from 'react';
import { useLocation } from 'react-router-dom/';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';
import Footer from '../components/Footer';
import '../components/footer.css';

export default function Recipes() {
  const { pathname } = useLocation();

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
