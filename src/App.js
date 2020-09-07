import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import {routes} from './routes'

export const App = () => {
    const routers = routes.map((item,i) =>{
        return <Route path={item.path} component={item.component} exact={item.exact} key={item.key}/>
    })
  return (
    <>
      <Switch>
          {routers}
      </Switch>
    </>
  );
}

