// import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import ReduxSaga from "redux-saga";
// import auth from "./reducers/auth";
// import {helloSaga} from "./saga/sagas";
//
// let reducers = combineReducers({
//     auth: auth,
// });
// const sagaMiddleware = ReduxSaga()
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     reducers,
//     /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware))
// );
// sagaMiddleware.run(helloSaga)

// export default store;
import auth from "./reducers/auth"
import {createStore, applyMiddleware, compose, combineReducers} from "redux"
import createSagaMiddleware from 'redux-saga'
// import ру from './saga'
import {signUp} from "./saga/sagas";

export const sagaMiddleware = createSagaMiddleware()
let reducers = combineReducers({
    auth: auth,
});
export const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            sagaMiddleware,
        ),
        window?.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


sagaMiddleware.run(signUp)