import React, { useState } from "react";
import style from "./style.module.css";
import Input from "../Input";
import Button from "../Button";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Occupation, setOccupation] = useState("");

  const changeName = (element) => {
    setName(element.target.value);
  };

  const changeEmail = (element) => {
    setEmail(element.target.value);
  };

  const changePassword = (element) => {
    setPassword(element.target.value);
  };

  const changeOccupation = (element) => {
    setOccupation(element.target.value);
  };

  return (
    <form className={style.container}>
      {name}
      {email}
      {password}
      {Occupation}
      <Input
        onChange={changeName}
        label="name"
        id="name"
        type="text"
        value={name}
        placeholder="Seu nome"
      />
      <Input
        onChange={changeEmail}
        label="email"
        id="email"
        type="text"
        value={email}
        placeholder="Seu e-mail"
      />
      <Input
        onChange={changePassword}
        label="senha"
        id="senha"
        type="password"
        value={password}
        placeholder="Cadastre uma senha"
      />
      <label htmlFor="occupation" className={style.label}>
        cargo
      </label>
      <select
        id="occupation"
        name="occupation"
        onChange={changeOccupation}
        className={style.select}
      >
        <option value="">Selecione a sua função</option>
        <option value="kitchen">Cozinheiro(a)</option>
        <option value="waiter">Atendente</option>
      </select>
      <Button>Registrar</Button>
    </form>
  );
};

export default RegisterForm;
