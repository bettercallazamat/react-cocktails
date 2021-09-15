import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../assets/styles/CocktailCard.css';

const CocktailCard = ({ cocktail }) => (
  <div className="CocktailCard">
    <img src={cocktail.strDrinkThumb} alt="drink" />
    <h3 className="coctail-name">{cocktail.strDrink}</h3>
    <span className={classNames({
      alcoholic: cocktail.strAlcoholic === 'Alcoholic',
      nonAlcoholic: cocktail.strAlcoholic === 'Non alcoholic',
      optionalAlcohol: cocktail.strAlcoholic === 'Optional alcohol',
    })}
    >
      {cocktail.strAlcoholic}
    </span>
    <span className={classNames({
      ordinaryDrink: cocktail.strCategory === 'Ordinary Drink',
      cocktail: cocktail.strCategory === 'Cocktail',
      milk: cocktail.strCategory === 'Milk / Float / Shake',
      other: cocktail.strCategory === 'Other/Unknown',
      cocoa: cocktail.strCategory === 'Cocoa',
      shot: cocktail.strCategory === 'Shot',
      coffeeTea: cocktail.strCategory === 'Coffee / Tea',
      homemadeLiqueur: cocktail.strCategory === 'Homemade Liqueur',
      punch: cocktail.strCategory === 'Punch / Party Drink',
      beer: cocktail.strCategory === 'Beer',
      softDrink: cocktail.strCategory === 'Soft Drink / Soda',
    })}
    >
      {cocktail.strCategory}
    </span>
  </div>
);

CocktailCard.propTypes = {
  cocktail: PropTypes.objectOf(PropTypes.string),
};

CocktailCard.defaultProps = {
  cocktail: {},
};

export default CocktailCard;
