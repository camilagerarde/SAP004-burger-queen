import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Hall from "./pages/Hall";
import Kitchen from "./pages/Kitchen";
import NotFound from "./pages/NotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} />
      <Route path="/hall" component={Hall} />
      <Route path="/kitchen" component={Kitchen} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
