import React from "react";
import { useHistory } from "react-router-dom";
import ImgLogo from "../ImgLogo";
import style from "./style.module.css";
import ButtonOut from "../../components/ButtonOut";
import firebase from "../../utils/firebase";

const NavComponent = (props) => {
  const history = useHistory();

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        history.push("/");
      });
  };
  return (
    <section className={style.menu}>
      <ImgLogo />
      <nav>
        <ul>{props.children}</ul>
      </nav>
      <ButtonOut onClick={logOut} />
    </section>
  );
};

export default NavComponent;
