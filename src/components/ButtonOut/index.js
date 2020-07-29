import React from "react";
import Out from "./sairClean.png";
import style from "./style.module.css";

const LogoOut = (props) => {
  return (
    <figure className={style.figure}>
      <img 
      src={Out} 
      className={style.imgOut} 
      alt="logo"
      onClick={props.onClick}/>
    </figure>
  );
};

export default LogoOut;