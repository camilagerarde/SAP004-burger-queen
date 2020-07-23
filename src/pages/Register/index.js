import React from "react";
import LogoPresentation from "../../components/LogoPresentation";
import FormRegister from "./FormRegister/";
import style from "./style.module.css";

function Register() {
  return (
    <section className={style.container}>
      <LogoPresentation />
      <FormRegister />
    </section>
  );
}

export default Register;
