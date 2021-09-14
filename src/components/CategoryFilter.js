import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter, cocktails, selected }) => {
  const options = cocktails.map((cocktail) => (
    <option value={cocktail.strDrink} key={cocktail.idDrink}>
      {cocktail.strDrink}
    </option>
  ));

  const defaultOption = () => (
    <option value="All" key="1">
      All
    </option>
  );

  return (
    <div className="searchWrapper d-flex  justify-content-center">
      <select value={selected} className="searchBar text-center " onChange={filter}>
        {defaultOption()}
        {options}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.func,
  cocktails: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string.isRequired,
};

CategoryFilter.defaultProps = {
  cocktails: {},
  filter: () => {
  },
};

export default CategoryFilter;
