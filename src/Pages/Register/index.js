import React from "react";
import Mrking from "../../images/logo.png";
import FormRegister from "../../components/FormRegister/";
import Button from "../../components/Button";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className={style.sobre}>
      <img src={Mrking} className={style.img} alt="logo" />
      <div className={style.duoBtn}>
        <Button id={style.button}>login</Button>
        <Button id={style.button} disabled>
          registro
        </Button>
      </div>
      <FormRegister />
      <Link to="/">LOGIN!</Link>
    </div>
  );
}

export default Register;
