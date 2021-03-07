import React from 'react';
import './App.css';
// import { getProducts } from './ApiService'
import HomePage from './Components/HomePage/HomePage';
import Nav from './Components/Nav/Nav';
import Favourites from './Components/FavouritesPage/FavouritesPage';
import Checkout from './Components/CheckoutPage/CheckoutPage';
import Products from './Components/ProductsPage/ProductsPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App () {
  return (
    <div>
      <Router>
        <Nav/>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/products" exact >
              <Products />
            </Route>

            <Route path="/favourites" exact>
              <Favourites />
            </Route>

            <Route path="/checkout" exact>
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
