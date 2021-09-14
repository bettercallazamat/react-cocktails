import React from 'react';
import PropTypes from 'prop-types';
import CocktailCard from '../components/CocktailCard';
import '../assets/styles/CocktailsList.css';

const CocktailsList = ({ cocktails }) => (
  <div className="CocktailsList">
    <div className="CocktailsList-filter" />
    <div className="CocktailsList-list">
      {
        cocktails.map((cocktail) => <CocktailCard cocktail={cocktail} key={cocktail} />)
        }
    </div>
  </div>
);

CocktailsList.propTypes = {
  cocktails: PropTypes.objectOf.isRequired,
};

export default CocktailsList;
