import React, { useState } from "react";
import firebase from "../../../utils/firebase";
import style from "./style.module.css";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import showError from "../../utils/error";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [occupation, setOccupation] = useState("");
  const [error, setError] = useState("");

  const changeName = (element) => {
    setName(element.target.value);
  };

  const changeEmail = (element) => {
    setEmail(element.target.value);
  };

  const changePassword = (element) => {
    setPassword(element.target.value);
  };

  const changeConfirmPassword = (element) => {
    setConfirmPassword(element.target.value);
  };

  const changeOccupation = (element) => {
    setOccupation(element.target.value);
  };

  const submitRegister = (event) => {
    event.preventDefault();
    if (!name || !email || !password || !confirmPassword || !occupation) {
      const error = "Preencha todos os campos";
      setError(error);
    } else if (password !== confirmPassword) {
      const error = "As senhas digitadas não conferem";
      setError(error);
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.auth().currentUser.updateProfile({
            displayName: name,
          });
        })
        .then(() => {
          const userUID = firebase.auth().currentUser.uid;
          firebase.firestore().collection("users").doc(userUID).set({
            name,
            email,
            occupation,
            userUID,
          });
          console.log("foi!!");
        })
        .catch(function (error) {
          const errorCode = error.code;
          const errorTranslate = showError(errorCode);
          setError(errorTranslate);
        });
    }
  };

  return (
    <form className={style.container}>
      <Input
        onChange={changeName}
        label="nome"
        id="name"
        type="text"
        value={name}
        placeholder="Seu nome"
      />
      <Input
        onChange={changeEmail}
        label="e-mail"
        id="email"
        type="text"
        value={email}
        placeholder="email@email.com"
      />
      <Input
        onChange={changePassword}
        label="senha"
        id="password"
        type="password"
        value={password}
        placeholder="******"
      />
      <Input
        onChange={changeConfirmPassword}
        label="confirme a senha"
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        placeholder="******"
      />
      <label htmlFor="occupation" className={style.label}>
        Função
      </label>
      <select
        id="occupation"
        name="occupation"
        onChange={changeOccupation}
        className={style.select}
      >
        <option value="">Selecione a sua função</option>
        <option value="kitchen">Cozinheiro(a)</option>
        <option value="hall">Atendente</option>
      </select>
      <p className={style.error}>{error}</p>
      <Button onClick={submitRegister}>Registrar</Button>
      <Link className={style.link} title="Voltar para login" to="/">
        VOLTAR
      </Link>
    </form>
  );
};

export default RegisterForm;
