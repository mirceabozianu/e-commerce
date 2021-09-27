import React from "react";
import ReactDOM from "react-dom";
import lscache from "lscache";
import { initLocalStorage } from "services/localStorage";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"), () => {
  if (!lscache.get("persisted")) {
    initLocalStorage();
  }
});
