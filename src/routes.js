import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Hall from "./pages/Hall";
import Kitchen from "./pages/Kitchen";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/hall/:status" component={Hall} />
      <PrivateRoute path="/kitchen/:status" component={Kitchen} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
