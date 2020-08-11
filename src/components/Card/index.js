import React from "react";
import style from "./style.module.css";

const Card = (props) => {
  return (
    <section
      className={style.card}
    >
      {props.children}
    </section>
  )
}

export default Card;