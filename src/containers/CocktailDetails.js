import React from 'react';
import '../assets/styles/CocktailDetails.css';
// import PropTypes from 'prop-types';

const CocktailDetails = (cocktailData) => {
  const cocktail = cocktailData.cocktail;

  let ingridients = [];
  const keys = Object.keys(cocktail);
  keys.forEach((key, index) => {
    if (key.includes('strIngredient') && cocktail[key]){
      ingridients.push(cocktail[key]);
    }
  });

  return (
    <div className="CocktailDetails">
      <img src={cocktail.strDrinkThumb} alt="drink" />
      <p>{ cocktail.strCategory }</p>
      <p>{ cocktail.strIBA }</p>
      <p>{ cocktail.strAlcoholic }</p>
      <p>{ cocktail.strGlass }</p>
      <p>{ cocktail.strInstructions }</p>
      <p>{ cocktail.strIngredient1 }</p>
      <ul className="ingridients">
        {ingridients.map(ingridient => 
          <li className="ingridient" key={ingridient}>{ingridient}</li>
        )}
      </ul>
    </div>
  );
};

export default CocktailDetails;
