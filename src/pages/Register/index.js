import React from "react";
import LogoPresentation from "../../components/LogoPresentation";
import RegisterForm from "./RegisterForm/";
import style from "./style.module.css";

function Register() {
  return (
    <section className={style.container}>
      <LogoPresentation />
      <RegisterForm />
    </section>
  );
}

export default Register;
