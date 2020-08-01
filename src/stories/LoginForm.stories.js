import React from "react";
import LoginForm from "../pages/Login/LoginForm";
import { Link } from "react-router-dom";

export default {
  title: "LoginForm",
  component: LoginForm,
};

export const Default = () => (
<LoginForm>
  <Link to="/register" title="Registre-se">
  Não possui conta? Registre-se
  </Link>
</LoginForm>
)
