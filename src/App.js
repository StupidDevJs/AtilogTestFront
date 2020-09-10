import React from "react";
import { Route, Switch } from "react-router-dom";
import {routes} from './routes'
import "./App.css";

export const App = () => {
  return (
    <>
      <Switch>
          {routes.map((item) =>{
          return <Route path={item.path} component={item.component} exact={item.exact} key={item.key}/>
      })}
      </Switch>
    </>
  );
}

