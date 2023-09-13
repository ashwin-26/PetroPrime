import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Form from "./Form";
import Product from "../Product";

const Login = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Switch>
        <Route path="/">
          {loggedIn ? <Product /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {loggedIn ? (
            <Redirect to="/" />
          ) : (
            <Form parentCallback={callbackFunction} />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default Login;
