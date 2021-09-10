import React from 'react';
// import PropTypes from 'prop-types';

const CocktailCard = ({cocktail}) => {
  // const {
  //   strDrink: name,
  // } = cocktail;
  
  return (
    <div className="CocktailCard">
      <p>{cocktail.strDrink}</p>
    </div>
  )
}


export default CocktailCard;
