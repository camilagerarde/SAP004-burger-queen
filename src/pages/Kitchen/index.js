import React from "react";
import NavComponent from "../../components/NavComponent";
import NavItem from "../../components/NavItem";
import style from "./style.module.css";
import Card from "../../components/Card";

function Kitchen() {
  return (
    <section className={style.container}>
      <NavComponent>
        <NavItem to="/kitchen/inProgress">Pedidos aguardando</NavItem>
        <NavItem to="/kitchen/ready">Pedidos entregues</NavItem>
      </NavComponent>{" "}
      <div className={style.main}>
        <Card>
          {" "}
          <h3>Pedido 01</h3>
          <p> Em construção</p>
        </Card>
        <Card>
          {" "}
          <h3>Pedido 02</h3>
          <p> Em construção</p>
        </Card>
      </div>
    </section>
  );
}

export default Kitchen;
