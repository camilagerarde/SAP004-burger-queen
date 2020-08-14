import React from "react";
import style from "./style.module.css";
import Button from "../../components/Button";
import Ico from "../../components/Ico";
import FormatHour from "../FormatHour";


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
    <section
      className={style.card}
    >
      <section key={props.order.id}>
        <p>Atendente: {props.order.name}</p>
        <p>Mesa:{props.order.table}</p>
        <h3>Pedido</h3>
        {props.order.products.map((prod) => (
          <ul 
          key={prod.name}
          className={style.orderItem}
          >
            <li>{showName(prod)}</li>
          </ul>
        ))}   
        <h3>TOTAL:
        {formatCurrency(props.order.total)}
        </h3> 
          <FormatHour title={"PEDIDO"} time={props.order.timestamp_ordered} />
      </section>
      {SomeClass}
      {nameButton()}
    </section>
  )
}

export default CardOrder;