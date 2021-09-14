import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Cocktail from './pages/Cocktail';
import Page404 from './pages/Page404';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Page404" component={Page404} exact />
      <Route path="/cocktail/:id" component={Cocktail} exact />
      <Redirect to="/Page404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
