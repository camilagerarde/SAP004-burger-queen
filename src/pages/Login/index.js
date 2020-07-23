import React from "react";
import LogoPresentation from "../../components/LogoPresentation";
import LoginForm from "./LoginForm";
import style from "./style.module.css";

function Login() {
  return (
    <section className={style.container}>
      <LogoPresentation />
      <div className={style.form}>
        <LoginForm />
      </div>
    </section>
  );
}

export default Login;
