import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCocktailsAction } from '../actions/cocktails';
import CocktailsList from '../containers/CocktailsList';
import Nav from '../containers/Nav'

const Home = () => {
  const data = useSelector(state => state.cocktails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktailsAction());
  }, [dispatch]);

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