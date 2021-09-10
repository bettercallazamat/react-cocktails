import { useEffect } from 'react';
import Routes from './routes'
import { useDispatch } from 'react-redux';
import { getAction } from './actions/cocktails';
import './assets/styles/App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAction());
  }, [dispatch]);

  return (
    <Routes />
  );
}

export default App;
