import auth from "./reducers/auth"
import {createStore, applyMiddleware, compose, combineReducers} from "redux"
import createSagaMiddleware from 'redux-saga'
import sagas from "./saga";

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


sagaMiddleware.run(sagas);
