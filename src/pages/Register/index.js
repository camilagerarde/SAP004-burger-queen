import React from "react";
import MrKing from "../../images/logo.png";
import FormRegister from "../../components/FormRegister";
import style from "./style.module.css";

function Register() {
  return (
    <div className={style.sobre}>
      <figure>
        <img src={MrKing} className={style.img} alt="logo" />
      </figure>
      <FormRegister />
    </div>
  );
}

export default Register;
