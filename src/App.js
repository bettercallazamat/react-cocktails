import { useEffect } from 'react';
import Routes from './routes'
import { useDispatch } from 'react-redux';
import { getCocktailsAction } from './actions/cocktails';
import './assets/styles/App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktailsAction());
  }, [dispatch]);

  return (
    <Routes />
  );
}

export default App;
