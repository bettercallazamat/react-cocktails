import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter, cocktails }) => {
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
      <select className="searchBar text-center " onChange={filter}>
        {defaultOption()}
        {options}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.func,
  cocktails: PropTypes.arrayOf(PropTypes.object),
};

CategoryFilter.defaultProps = {
  cocktails: {},
  filter: () => {
  },
};

export default CategoryFilter;
