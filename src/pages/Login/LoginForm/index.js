import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import style from "./style.module.css"
import { Link, useHistory } from "react-router-dom";
import firebase from "../../../utils/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const history = useHistory();

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
      .then((data) => {
        setError("");
        console.log(data.user.uid)
        firebase.firestore()
        .collection('users')
        .doc(data.user.uid)
        .get()
        .then((doc) => {
          const userData = doc.data()
          if(userData.occupation === 'kitchen'){
            return history.push("/kitchen/inProgress");
          }
          return history.push("/hall/new");
        })
      })
      .catch((errorLogin) => {
        const errorCode = errorLogin.code;
        if (errorCode === 'auth/wrong-password') {
          setError('Senha inválida.');
        } else if (errorCode === 'auth/user-not-found') {
          setError('Email não encontrado.');
        } else {
          setError('Email não encontrado.');
        }
      });
  }

  return (
    <div
      className={style.container}
    >
      <Input
        onChange={changeEmail}
        label="email"
        id="email"
        type="text"
        value={email}
        placeholder="teste@teste.com"
      />
      <Input
        onChange={changePassword}
        label="senha"
        id="senha"
        type="password"
        value={password}
      />
      {error}
      <Button
        onClick={submitLogin}
      >
        Entrar
      </Button>
        <Link to="/register"
        className={style.register}
        >
          Não possui conta? Registre-se
        </Link>
    </div>
  );
};

export default LoginForm;
