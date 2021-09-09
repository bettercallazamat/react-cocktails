import { Switch, Route } from 'react-router-dom';
import CocktailsList from './containers/CocktailsList';
import CocktailDetails from './containers/CocktailDetails';
import Nav from './containers/Nav';

import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={CocktailsList} />
        <Route exact path="/details/:id" component={CocktailDetails} />
        <Route>Oooops 404 NOT FOUND</Route>
      </Switch>
    </div>
  );
}

export default App;
