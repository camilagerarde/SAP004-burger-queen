import React from "react";
import NavComponent from "../../components/NavComponent";
import Card from "../../components/Card";
import NavItem from "../../components/NavItem";


const PageHall = () => {
  return (
    <section>
      <NavComponent>
        <NavItem to="/hall/newOrder">Pedidos Novos</NavItem>
        <NavItem to="/hall/ready">Pedidos Prontos</NavItem>
        <NavItem to="/hall/delivered">Pedidos entregues</NavItem>
      </NavComponent>
      <Card></Card>
    </section> 
  );
};

export default PageHall;
