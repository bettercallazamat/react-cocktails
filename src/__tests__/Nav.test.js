import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../containers/Nav';

describe('Nav', () => {
  test('has a logo image', () => {
    render(<BrowserRouter><Nav /></BrowserRouter>);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  test('has a text "DRINKS & LIFESTYLE"', () => {
    render(<BrowserRouter><Nav /></BrowserRouter>);

    expect(screen.getByTestId('logoText')).toBeInTheDocument();
  });
});