import React from "react";
import ReactDOM from "react-dom";
import lscache from "lscache";
import { initLocalStorage } from "services/localStorage";
import "./index.css";
import App from "./App";
import store from "services/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
  () => {
    if (!lscache.get("persisted")) {
      initLocalStorage();
    }
  }
);
