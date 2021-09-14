import React from 'react';
import ingridientsHelper from '../helpers/ingridientsHelper';
import '../assets/styles/CocktailDetails.css';
// import PropTypes from 'prop-types';

const CocktailDetails = (cocktailData) => {
  const { cocktail } = cocktailData;

  const ingridients = ingridientsHelper(cocktail);
  // console.log(cocktail);
  // console.log(ingridients);

  return (
    <div className="CocktailDetails">
      <img src={cocktail.strDrinkThumb} alt="drink" />
      <h3>
        <strong>Cocktail name: </strong>
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
        <p><strong>Ingridients:</strong></p>
        {Object.keys(ingridients).map((key) => (
          <li key={key}>
            <em>{ingridients[key]}</em>
            {' of '}
            {key}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailDetails;
