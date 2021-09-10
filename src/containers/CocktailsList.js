import React from 'react';
// import PropTypes from 'prop-types';
import CocktailCard from '../components/CocktailCard';

const CocktailsList = ({ cocktails }) => {
  // const foo = 'bar';

  return (
    <div className="CocktailsList">
      { 
        cocktails.map((cocktail, key) => 
          <CocktailCard cocktail={cocktail} key={key} />
        )
      }
    </div>
  );
};

export default CocktailsList;
