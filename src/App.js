import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./Redux/store";

import Navigation from "./Components/Navigation/Navigation";

import Wrapper from "./Container/Wrapper";
import ProductDetail from "./Container/ProductDetail";
import Cart from "./Container/Cart";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" render={props => <Navigation {...props} />} />
        <Switch>
          <Route exact path="/" render={props => <Wrapper {...props} />} />
          <Route
            exact
            path="/category/:id"
            render={props => <Wrapper {...props} />}
          />
          <Route
            path="/product/:id"
            render={props => <ProductDetail {...props} />}
          />
          <Route path="/cart/:id" render={props => <Cart {...props} />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
