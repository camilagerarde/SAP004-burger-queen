import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (element) => {
    setEmail(element.target.value);
  };

  const changePassword = (element) => {
    setPassword(element.target.value);
  };

  const submitLogin = () => {
    console.log(email, password);
  };

  return (
    <div className={style.container}>
      <Input
        onChange={changeEmail}
        label="email"
        id="email"
        type="text"
        value={email}
        placeholder="email@email.com"
      />
      <Input
        onChange={changePassword}
        label="senha"
        id="senha"
        type="password"
        value={password}
        placeholder="******"
      />
      <Button className={style.button} onClick={submitLogin}>
        Entrar
      </Button>
      <Link to="/register" className={style.register} title="Registre-se">
        Não possui conta? Registre-se
      </Link>
    </div>
  );
};

export default LoginForm;
