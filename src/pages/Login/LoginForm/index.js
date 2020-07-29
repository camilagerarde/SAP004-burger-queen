import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import showError from "../../utils/error";
import style from "./style.module.css";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../../utils/firebase";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const changeEmail = (element) => {
    setEmail(element.target.value);
  };

  const changePassword = (element) => {
    setPassword(element.target.value);
  };

  const alertError = (error) => {
    Swal.fire({
      text: error,
      icon: "error",
      confirmButtonColor: "#334585",
      width: "25rem",
    });
  };

  const submitLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data.user.uid);
        firebase
          .firestore()
          .collection("users")
          .doc(data.user.uid)
          .get()
          .then((doc) => {
            const userData = doc.data();
            if (userData.occupation === "kitchen") {
              return history.push("/kitchen/inProgress");
            }
            return history.push("/hall/newOrder");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorTranslate = showError(errorCode);
        alertError(errorTranslate);
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
      <Button onClick={submitLogin}>Entrar</Button>
      <Link to="/register" className={style.register} title="Registre-se">
        Não possui conta? Registre-se
      </Link>
    </div>
  );
};

export default LoginForm;
