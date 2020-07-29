import React from "react";
import Logo from "./logoreduzida.png";
import style from "./style.module.css";

const LogoReduzida = () => {
  return (
    <>
    <figure>
      <img src={Logo} className={style.img} alt="logo" />
    </figure>
    </>
  );
};

export default LogoReduzida;