import Routes from './routes'
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getCocktailsAction } from './actions/cocktails';
import './assets/styles/App.css';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCocktailsAction());
  // }, [dispatch]);

  const data = useSelector(state => state);
  console.log(data);

  return (
    <Routes />
  );
}

export default App;
