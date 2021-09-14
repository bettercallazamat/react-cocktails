import React from 'react';
// import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CocktailCard from '../components/CocktailCard';

describe('CocktailCard', () => {
  const cocktail = {
    idDrink: '11007',
    strDrink: 'Margarita',
    strCategory: 'Ordinary Drink',
    strAlcoholic: 'Alcoholic',
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<CocktailCard cocktail={cocktail} />);
    expect(asFragment(<CocktailCard cocktail={cocktail} />)).toMatchSnapshot();
  });
});
