import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/Home';

const mockStore = configureStore([]);

const initialState = {
  cocktails: {
    cocktails: {
      drinks: [
      {
        idDrink: '11007',
        strDrink: 'Margarita',
        strCategory: 'Ordinary Drink',
        strAlcoholic: 'Alcoholic',
      },
      {
        idDrink: '11008',
        strDrink: 'Boom',
        strCategory: 'Shot',
        strAlcoholic: 'Alcoholic',
      },
      {
        idDrink: '11009',
        strDrink: 'Luck',
        strCategory: 'Cocktail',
        strAlcoholic: 'Alcoholic',
      },
    ]
    },
    error: null,
    loading: false,
  },
  filter: 'All',
};

describe('Page Home', () => {
  let store;
  afterAll(cleanup);

  it('loads all cocktails from store', () => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('Ordinary Drink')).toBeInTheDocument();
    expect(screen.getByText('Shot')).toBeInTheDocument();
    expect(screen.getByText('Cocktail')).toBeInTheDocument();
    expect(screen.getByTestId('CocktailsList')).toBeInTheDocument();
  });

  it('loads only countries from selected filter', () => {
    store = mockStore({ ...initialState, filter: 'Margarita'});
    store.dispatch = jest.fn();

    render(
      <Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('Ordinary Drink')).toBeInTheDocument();
    expect(screen.queryByText('Shot')).not.toBeInTheDocument();
  });
});