import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import firebase from "../../../utils/firebase";
import showError from "../../utils/error";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const changeEmail = (element) => {
    setEmail(element.target.value);
  };

  const changePassword = (element) => {
    setPassword(element.target.value);
  };

  const submitLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("logou");
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorTranslate = showError(errorCode);
        setError(errorTranslate);
      });
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
      <p className={style.error}>{error}</p>
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
