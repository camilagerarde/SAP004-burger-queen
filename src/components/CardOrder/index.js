import React from "react";
import style from "./style.module.css";
import Button from "../../components/Button";
import Ico from "../../components/Ico";
import Timer from "../Timer";

const changeNameButton = {
  inProgress: "Pronto",
  toDelivery: "Entregar",
};

const formatCurrency = (value) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const CardOrder = (props) => {
  const nameButton = () => {
    let status = props.order.status;
    if (status === "ready") {
      return (
        <span className={style.done}>
          <p>Pedido finalizado</p>
          <Ico type="check" alt="Pedido finalizado" />
        </span>
      );
    } else {
      return (
        <Button
          onClick={() => props.onChangeStatus(props.order)}
          color="lightBlue"
          size="medium"
        >
          {changeNameButton[status]}
        </Button>
      );
    }
  };

  const showName = (prod) => {
    if (!prod.burger) {
      return `${prod.count} - ${prod.name}`;
    } else {
      return `${prod.count} - ${prod.name} (${prod.burger}, adicional: ${prod.optional})`;
    }
  };

  return (
    <section className={style.card}>
      <section key={props.order.id}>
        <p>Resumo do pedido</p>
        <h3>Atendente: {props.order.name}</h3>
        <h3>Mesa: {props.order.table}</h3>
        {props.order.products.map((prod) => (
          <ul
            key={`${prod.name}${prod.optional}${prod.burger}`}
            className={style.orderItem}
          >
            <li>{showName(prod)}</li>
          </ul>
        ))}
        <p className={style.total}>
          Total:
          {formatCurrency(props.order.total)}
        </p>
        <Timer
          createdAt={props.order.createdAt}
          deliveredAt={props.order.deliveredAt}
          status={props.order.status}
          className={style.timer}
        />
      </section>

      {nameButton()}
    </section>
  );
};

export default CardOrder;
