import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Restaurant from "./pages/Restaurant";
import Kitchen from "./pages/Kitchen";
import NotFound from "./pages/NotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} />
      <Route path="/restaurant" component={Restaurant} />
      <Route path="/kitchen" component={Kitchen} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
