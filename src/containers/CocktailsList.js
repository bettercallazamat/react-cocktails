import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CocktailCard from '../components/CocktailCard';
import CategoryFilter from '../components/CategoryFilter';
import filterAction from '../actions/filters';
import '../assets/styles/CocktailsList.css';

const CocktailsList = ({ cocktails }) => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const filteredCocktails = (filter !== 'All') ? cocktails.filter((cocktail) => cocktail.strDrink === filter) : cocktails;

  const resetFilter = () => {
    dispatch(filterAction('All'));
  };

  const handleFilterChange = (e) => {
    dispatch(filterAction(e.target.value));
  };

  return (
    <div className="CocktailsList">
      <div className="CocktailsList-filter">
        <CategoryFilter filter={handleFilterChange} cocktails={cocktails} />
        <button onClick={resetFilter} type="button">Clear</button>
      </div>
      <div className="CocktailsList-list">
        {
          filteredCocktails.map((cocktail) => <CocktailCard cocktail={cocktail} key={cocktail} />)
        }
      </div>
    </div>
  );
};

CocktailsList.propTypes = {
  cocktails: PropTypes.objectOf,
};

CocktailsList.defaultProps = {
  cocktails: {},
};

export default CocktailsList;
