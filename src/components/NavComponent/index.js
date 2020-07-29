import React from "react";
import ImgLogo from "../ImgLogo";
import style from "./style.module.css";
import ButtonOut from "../../components/ButtonOut";

const NavComponent = (props) => {
  return (
      <section
        className={style.menu}>
          <ImgLogo/>
          <nav>
            <ul>
              {props.children}
            </ul>
          </nav>
          <ButtonOut/>
      </section>
    );
  };

  export default NavComponent;