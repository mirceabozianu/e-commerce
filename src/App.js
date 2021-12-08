import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import SignIn from "pages/Auth/SignIn";
import Register from "pages/Auth/Register";
import Products from "pages/Products";
import ProductDetails from "pages/ProductDetails";
import NavBar from "components/common/layouts/NavBar";
import history from "services/history";

const App = () => {
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/products/:category" component={Products} exact />
        <Route
          path="/products/:category/:id"
          component={ProductDetails}
          exact
        />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
