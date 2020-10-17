import React from "react";
import ReactDom from "react-dom";
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";

import App from "./components/App";
import configureStore, {history} from "./configureStore";

import "bootstrap/dist/css/bootstrap.min.css";


const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

