import React from 'react';
import ingridientsHelper from '../helpers/ingridientsHelper';
import '../assets/styles/CocktailDetails.css';
// import PropTypes from 'prop-types';

const CocktailDetails = (cocktailData) => {
  const { cocktail } = cocktailData;

  const ingridients = ingridientsHelper(cocktail);

  return (
    <div className="CocktailDetails">
      <img src={cocktail.strDrinkThumb} alt="drink" />
      <h3>
        <strong>Name: </strong>
        { cocktail.strDrink }
      </h3>
      <p>
        <strong>Category: </strong>
        { cocktail.strCategory }
      </p>
      <p>
        <strong>IBA: </strong>
        { cocktail.strIBA }
      </p>
      <p>
        <strong>Alcoholic: </strong>
        { cocktail.strAlcoholic }
      </p>
      <p>
        <strong>Glass: </strong>
        { cocktail.strGlass }
      </p>
      <p>
        <strong>Instructions: </strong>
        { cocktail.strInstructions }
      </p>
      <ul className="ingridients">
        {Object.keys(ingridients).map((key) => (
          <li key={key}>
            <strong>{key}</strong>
            :
            {' '}
            {ingridients[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailDetails;
