import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';
import ShoppingCartPage from './ShoppingCartPage';  // Import the ShoppingCartPage component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/products" component={ProductListingPage} />
          <Route path="/cart" component={ShoppingCartPage} />  {/* Add the ShoppingCartPage route */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
