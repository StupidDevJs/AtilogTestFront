import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import "./reset.css";
import {Navbar} from "./components/Navbar";

export const App = () => {
  return (
    <>
        <div>
            <Navbar />
        </div>
      <Switch>
        {routes.map((item) => {
          return (
            <Route
              path={item.path}
              component={item.component}
              exact={item.exact}
              key={item.key}
            />
          );
        })}
      </Switch>
    </>
  );
};
