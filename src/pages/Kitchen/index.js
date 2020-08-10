import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../utils/firebase";
import NavComponent from "../../components/NavComponent";
import NavItem from "../../components/NavItem";
import style from "./style.module.css";
import ToDelivery from "../Hall/ToDelivery";

function Kitchen() {
  const [orders, setOrders] = useState([]);
  let { status } = useParams();

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .where("status", "==", status)
      .onSnapshot((orderList) => {
        const itens = [];
        orderList.forEach((doc) => {
          itens.push({ id: doc.id, ...doc.data() });
        });
        setOrders(itens);
      });
  }, [orders, setOrders, status]); //firebase

  return (
    <section className={style.container}>
      <NavComponent>
        <NavItem to="/kitchen/inProgress">Pedidos aguardando</NavItem>
        <NavItem to="/kitchen/ready">Pedidos entregues</NavItem>
      </NavComponent>{" "}
      <div className={style.main}>
        <ToDelivery orders={orders}/>
      </div>
    </section>
  );
}

export default Kitchen;
