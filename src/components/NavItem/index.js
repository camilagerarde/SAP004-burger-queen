import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css"

const NavItem = (props) => {
  return (
    <li
    className={style.liMenu}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

export default NavItem;