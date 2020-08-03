import React from 'react';
import PropTypes from "prop-types"
import style from './style.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      id={props.id}
      className={`${style.button} ${style[props.color]} ${style[props.size]}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'lightBlue', 'lightOrange', 'lightRed', 'salmon']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  type: PropTypes.oneOf(['button', 'submit'])
}

Button.defaultProps = {
  size: 'big',
  color: 'blue',
  id: null,
  onClick: null,
  disabled: false,
  type: 'button'
}
export default Button;

