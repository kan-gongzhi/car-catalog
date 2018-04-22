import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import * as reducers from "./redux/index";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import AppContainer from "./ui/AppContainer";
// store
/*************************************************************/
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = [routerMiddleware(history), thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({ ...reducers, router: routerReducer }),
  composeEnhancers(applyMiddleware(...middleware))
);
// routes
/*************************************************************/
const routes = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>
);
// render
/*************************************************************/
const el = document.getElementById("root");

ReactDOM.render(routes, el);
registerServiceWorker();
