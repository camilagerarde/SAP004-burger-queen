import React, { useState } from "react";
import firebase from "../../../utils/firebase";
import style from "./style.module.css";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccupation] = useState("");

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

  const submitRegister = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
        console.error(error);
      });

    //   db.collection("users").add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
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
        id="senha"
        type="password"
        value={password}
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
        <option value="restaurant">Atendente</option>
      </select>
      <Button onClick={submitRegister}>Registrar</Button>
      <Link className={style.link} title="Voltar para login" to="/">
        VOLTAR
      </Link>
    </form>
  );
};

export default RegisterForm;
