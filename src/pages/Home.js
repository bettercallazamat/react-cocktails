// import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CocktailsList from '../containers/CocktailsList';
import Nav from '../containers/Nav'

const Home = () => {
  // const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  console.log(data);

  return (
    <>
      <Nav />
      <div>
        { data.loading
          ? <span>Loading...</span>
          : <CocktailsList cocktails={data.cocktails.drinks} /> }
      </div>
    </>
  );
};

export default Home;