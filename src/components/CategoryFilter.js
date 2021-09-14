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
    <div className="CategoryFilter">
      <select value={selected} onChange={filter}>
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
