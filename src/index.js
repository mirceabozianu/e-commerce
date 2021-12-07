import React from "react";
import ReactDOM from "react-dom";
import lscache from "lscache";
import { initLocalStorage } from "services/localStorage";
import "./index.css";
import App from "./App";
import { store, persistor } from "services/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root"),
  () => {
    if (!lscache.get("persisted")) {
      initLocalStorage();
    }
  }
);
