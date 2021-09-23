import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initLocalStorage } from "services/localStorage";
import lscache from "lscache";

ReactDOM.render(<App />, document.getElementById("root"), () => {
  if (!lscache.get("persisted")) initLocalStorage();
});
