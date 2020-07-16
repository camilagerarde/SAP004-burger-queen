import React from "react";
import Button from "../Button/index";
import "./style.css";

const DuoBtn = () => {
  const alerta = () => {
    return alert("outro botão!");
  };

  return (
    <div>
      <Button handleClick={() => alert("olá!!")} class="outra" name="Burguer" />
      <Button handleClick={alerta} name="Queen" />
    </div>
  );
};

export default DuoBtn;
