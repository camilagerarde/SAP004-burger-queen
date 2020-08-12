import React from "react";
import PropTypes from "prop-types";
import CardOrder from "../../../components/CardOrder";
import Button from "../../../components/Button";
import Ico from "../../../components/Ico";
import style from "./style.module.css";
import firebase from "../../../utils/firebase";
import Swal from "sweetalert2";

const nextState = {
  new: "inProgress",
  inProgress: "toDelivery",
  toDelivery: "ready",
};

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

const orderCards = (props) => {
  const changeStatus = (order) => {
    const status = nextState[order.status];
    firebase
      .firestore()
      .collection("orders")
      .doc(order.id)
      .update({
        status,
      })
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Pedido enviado para o setor responsável!",
        });
      });
  };

  const nameButton = (orderItem) => {
    let status = props.status;
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
          onClick={() => changeStatus(orderItem)}
          color="lightBlue"
          size="medium"
        >
          {changeNameButton[props.status]}
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
    <section className={style.container}>
      {props.orders.map((orderItem) => (
        <CardOrder key={orderItem.id}>
          <section>
            <p>Atendente: {orderItem.name}</p>
            <p>Mesa:{orderItem.table}</p>
            <h3>Pedido</h3>
            {orderItem.products.map((prod) => (
              <ul
                key={`${prod.name}${prod.burger}${prod.optional}`}
                className={style.orderItem}
              >
                <li>{showName(prod)}</li>
              </ul>
            ))}
            <h3>
              TOTAL:
              {formatCurrency(orderItem.total)}
            </h3>
          </section>
          {nameButton(orderItem)}
        </CardOrder>
      ))}
    </section>
  );
};

orderCards.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      table: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
        })
      ),
    })
  ),
};

orderCards.defaultProps = {
  orders: [],
};

export default orderCards;
