import React from "react";
import {BrowserRouter} from "react-router-dom";
import NavComponent from "../components/NavComponent";
import NavItem from "../components/NavItem";


export default {
  title: "NavComponent",
  component: NavComponent,
};

export const Default = () =>  (
  <BrowserRouter>
    <NavComponent>
      <NavItem to="/hall/newOrder">Pedidos Novos</NavItem>
      <NavItem to="/hall/ready">Pedidos Prontos</NavItem>
      <NavItem to="/hall/delivered">Pedidos entregues</NavItem>
    </NavComponent>
  </BrowserRouter>
);
