import React from "react";
import Mrking from "./logo.png";
import style from "./style.module.css";

const LogoPresentation = () => {
  return (
    <figure className={style.figure}>
      <img src={Mrking} className={style.img} alt="logo" />
    </figure>
  );
};

export default LogoPresentation;
