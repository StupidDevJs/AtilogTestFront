import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "./routes";
import "./reset.css";
import {Navbar} from "./components/Nav/Navbar";
import {connect} from 'react-redux'

const App = ({isAuth}) => {
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <Switch>
                {routes.map((item) => {
                    return (
                        <Route
                            path={item.path}
                            component={item.component}
                            exact={item.exact}
                            key={item.key}
                        >
                            {item.isPrivate && !isAuth ? <Redirect to='/signUp'/> : null}
                        </Route>
                    );
                })}
            </Switch>
        </>
    );
};
const mStP = state => ({
    isAuth: state.auth.isAuth
})
export default connect(mStP, null)(App)
