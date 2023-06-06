import React from 'react';
import { useParams } from 'react-router-dom/';

export default function RecipeDetails() {
  const { idDaReceita } = useParams();
  console.log(idDaReceita);
  return <h1>{idDaReceita}</h1>;
}
