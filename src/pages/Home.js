import { useSelector } from 'react-redux';
import CocktailsList from '../containers/CocktailsList';
import Nav from '../containers/Nav'

const Home = () => {
  const data = useSelector(state => state.cocktails);

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