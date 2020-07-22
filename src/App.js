import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
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
