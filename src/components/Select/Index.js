import React from "react";
import style from "./style.module.css";

const Select = (props) => {
  return (
    <div className={style.container}>
      <label htmlFor={props.id} className={style.label}>
        {props.label}
      </label>
      <select
        onChange={props.onChange || null}
        name={props.name}
        id={props.id}
        className={style.select}
      >
        <option value={props.value}>{props.children}</option>
      </select>
    </div>
  );
};

export default Select;
