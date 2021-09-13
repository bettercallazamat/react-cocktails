import React from 'react';
// import PropTypes from 'prop-types';
import CocktailCard from '../components/CocktailCard';
import '../assets/styles/CocktailsList.css';

const CocktailsList = ({ cocktails }) => {
  return (
    <div className="CocktailsList">
      <div className="CocktailsList-filter">
        
      </div>
      <div className="CocktailsList-list">
        { 
          cocktails.map((cocktail, key) => 
            <CocktailCard cocktail={cocktail} key={key} />
          )
        }
      </div>
    </div>
  );
};

export default CocktailsList;
