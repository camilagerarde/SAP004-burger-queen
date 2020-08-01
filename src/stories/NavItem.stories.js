import React from "react";
import NavItem from "../components/NavItem";


export default {
  title: "NavItem",
  component: NavItem,
};

export const Default = (props) => (
  <NavItem>
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
  </NavItem>
  )