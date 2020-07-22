import React from "react";
import style from "./style.module.css";

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id} className={style.label}>
        {props.label}
      </label>
      <input
        onChange={props.onChange || null}
        type={props.type}
        id={props.id}
        value={props.value}
        className={style.input}
        placeholder={props.placeholder || ""}
      />
    </>
  );
};

export default Input;
