import React from "react";
import Register from "./Pages/Register/index";
import Login from "./Pages/Login/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} />
    </Switch>
  );
}

export default App;
