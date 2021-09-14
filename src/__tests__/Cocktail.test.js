import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import Cocktail from '../pages/Cocktail';

const mockStore = configureStore([]);

const initialState = {
  cocktail: {
    cocktail: {
      drinks: [
        {
          idDrink: 'Brazil',
          strDrink: 'Margarita',
          strCategory: 'Ordinary Drink',
          strIBA: 'Contemporary Classics',
          strAlcoholic: 'Alcoholic',
          strGlass: 'Cocktail glass',
          strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
          strIngredient1: 'Tequila',
          strIngredient2: 'Triple sec',
          strIngredient3: 'Lime juice',
          strIngredient4: 'Salt',
          strMeasure1: '1 1/2 oz ',
          strMeasure2: '1/2 oz ',
          strMeasure3: '1 oz ',
          strMeasure4: null,
        },
      ]
    },
    error: null,
    loading: false,
  },
  filter: 'All',
};

describe('Page Cocktail', () => {
  let store;
  afterAll(cleanup);

  it('renders required data', () => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}><BrowserRouter><Cocktail /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('Margarita')).toBeInTheDocument();
    expect(screen.getByText('Ordinary Drink')).toBeInTheDocument();
    expect(screen.getByText('Contemporary Classics')).toBeInTheDocument();
  });
});