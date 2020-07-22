import React from "react";
import Button from "../Button/index";
import style from "./style.module.css";

const DuoBtn = () => {
  const alerta = () => {
    return alert("outro botão!");
  };

  return (
    <div className={style.container}>
      <Button onClick={() => alert("olá!!")} id={style.button}>
        login
      </Button>
      <Button onClick={alerta} id={style.button}>
        registro
      </Button>
    </div>
  );
};

export default DuoBtn;
