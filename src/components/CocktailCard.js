import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/CocktailCard.css';
import { Link } from 'react-router-dom';

const CocktailCard = ({ cocktail }) => (
  <Link to={`/cocktail/${cocktail.idDrink}`}>
    <div className="CocktailCard">
      <img src={cocktail.strDrinkThumb} alt="drink" />
      <h3 className="coctail-name">
        Name:
        {cocktail.strDrink}
      </h3>
      <span className="coctail-alco">{cocktail.strAlcoholic}</span>
      <span className="coctail-category">{cocktail.strCategory}</span>
    </div>
  </Link>
);

CocktailCard.propTypes = {
  cocktail: PropTypes.objectOf(PropTypes.string),
};

CocktailCard.defaultProps = {
  cocktail: {},
};

export default CocktailCard;
