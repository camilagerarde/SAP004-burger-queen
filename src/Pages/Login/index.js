import React from "react";
import DuoBtn from "../../components/DuoBtn/index";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <DuoBtn />
      <p>Burguer Queen</p>
      <Link to="/register">Register!</Link>
    </div>
  );
}

export default Login;
