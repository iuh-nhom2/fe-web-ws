import "regenerator-runtime/runtime";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";

import { createLogger } from "redux-logger";
import * as reduxModule from "redux";

import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import rootSaga from './rootSaga';

reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";

reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();
let middlewares = [thunk, sagaMiddleware];

// logger for development
if (process.env.NODE_ENV !== "production") {
  const loggerMiddleware = createLogger({
    collapsed: false, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
    duration: false, // print the duration of each action?
    timestamp: true, // print the timestamp with each action?

    level: "log", // console's level
    // colors: ColorsObject, // colors for title, prev state, action and next state: https://github.com/LogRocket/redux-logger/blob/master/src/defaults.js#L12-L18
    // titleFormatter, // Format the title used when logging actions.

    // stateTransformer, // Transform state before print. Eg. convert Immutable object to plain JSON.
    // actionTransformer, // Transform action before print. Eg. convert Immutable object to plain JSON.
    // errorTransformer, // Transform error before print. Eg. convert Immutable object to plain JSON.

    logger: console, // implementation of the `console` API.
    logErrors: true, // should the logger catch, log, and re-throw errors?

    diff: false, // (alpha) show diff between states?
    // diffPredicate
  });

  middlewares = [...middlewares, loggerMiddleware];
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const appReducer = combineReducers({
  ...reducers,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_TOTAL_APP") {
    // destroyJwt();
    state = undefined;
  }
  return appReducer(state, action);
};
const store = createStore(
  rootReducer,
  // compose(applyMiddleware(...middlewares))
  enhancer
);
sagaMiddleware.run(rootSaga);

let history = createBrowserHistory();

export { history, store };
