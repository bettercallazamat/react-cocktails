import { useSelector, useDispatch } from 'react-redux';
import { getCocktailAction } from '../actions/cocktail';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../containers/Nav'
import CocktailDetails from '../containers/CocktailDetails'

const Cocktail = () => {
  const cocktail = useSelector(state => state.cocktail.cocktail);
  const dispatch = useDispatch();
  const { id } = useParams()

  // const data = useSelector(state => state);
  // console.log(data);

  useEffect(() => {
    dispatch(getCocktailAction(id));
  }, [id, dispatch]);

  return (
    <>
      <Nav />
      <div>
        {cocktail.loading
          ? <span>Loading...</span>
          : <CocktailDetails cocktail={cocktail.drinks[0]} />}
      </div>
    </>
  );
};

export default Cocktail;