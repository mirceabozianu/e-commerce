import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";
import SignIn from "./pages/Auth/SignIn/index";
import Register from "./pages/Auth/Register/index";
import NavBar from "./components/common/layouts/NavBar/index";
import { getCategories } from "./services/api";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const res = await getCategories();
      setData(res);
    }
    fetchCategories();
  }, []);
  return (
    <Router>
      <div>
        <NavBar data={data} />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Dashboard data={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
