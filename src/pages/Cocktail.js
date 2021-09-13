import { useSelector, useDispatch } from 'react-redux';
import { getCocktailAction } from '../actions/cocktail';
import { useParams, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../containers/Nav'
import CocktailDetails from '../containers/CocktailDetails'

const Cocktail = () => {
  const cocktail = useSelector(state => state.cocktail);
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(getCocktailAction(id));
  }, [id, dispatch]);

  return (
    <>
      <Nav />
      <div>
        {cocktail.notFound && <Redirect to="/Page404" />}
        {cocktail.loading
          ? <span>Loading...</span>
          : <CocktailDetails cocktail={cocktail.cocktail.drinks[0]} />}
      </div>
    </>
  );
};

export default Cocktail;