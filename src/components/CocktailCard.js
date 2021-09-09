import React from 'react';
// import PropTypes from 'prop-types';

const CocktailCard = ({cocktail}) => (
  <div className="Cocktail">
    <p>{cocktail.strDrink}</p>
  </div>
);

export default CocktailCard;
