import React from "react";
import ComicBurgerPresentation from "../../components/ComicBurgerPresentation";
import LoginForm from "./LoginForm";
import style from "./style.module.css";

function Login() {
  return (
    <section
      className={style.ss}
    >
      <ComicBurgerPresentation
        className={style.img}
      />
      <div
        className={style.form}
      >
        <LoginForm/>
      </div>
    </section>
  );
}

export default Login;
