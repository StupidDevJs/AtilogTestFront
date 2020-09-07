import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./view/Products/Products";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" /> 
        </Route>
        <Route path="/products" render={() => <Products />} />
      </Switch>
    </>
  );
}

export default App;
