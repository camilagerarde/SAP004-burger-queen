import React from "react";
import NavItem from "../components/NavItem";
import {BrowserRouter} from "react-router-dom";


export default {
  title: "NavItem",
  component: NavItem,
};

export const Default = () => (
  <BrowserRouter>
    <NavItem
      to="/test"
    >
      link
    </NavItem>
  </BrowserRouter>
  )