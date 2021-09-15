import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import getCocktailAction from '../actions/cocktail';
import Nav from '../containers/Nav';
import CocktailDetails from '../containers/CocktailDetails';

const Cocktail = () => {
  const cocktail = useSelector((state) => state.cocktail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCocktailAction(id));
  }, [id, dispatch]);

  const cocktailData = (cocktail) => {
    if (cocktail.loading) {
      return (<span className="loading-text">Loading...</span>);
    } if (!cocktail.cocktail.drinks[0]) {
      return (<Redirect to="/Page404" />);
    }
    return (<CocktailDetails cocktail={cocktail.cocktail.drinks[0]} />);
  };

  return (
    <>
      <Nav />
      <div>
        {cocktailData(cocktail)}
      </div>
    </>
  );
};

export default Cocktail;
