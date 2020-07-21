import React from 'react';
import style from './style.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      id={props.id}
      className={`${style.button} ${style[props.color]}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

