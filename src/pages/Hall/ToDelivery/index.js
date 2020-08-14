import React from "react";
import PropTypes from "prop-types";
import CardOrder from "../../../components/CardOrder";
import style from "./style.module.css";
import firebase from "../../../utils/firebase";
import Swal from "sweetalert2";

const nextState = {
  new: "inProgress",
  inProgress: "toDelivery",
  toDelivery: "ready",
};

const orderCards = (props) => {
  const changeStatus = (order) => {
    const data = {
      status: nextState[order.status],
    };
    if (data.status === "ready") {
      data.deliveredAt = new Date().getTime();
    }
    firebase
      .firestore()
      .collection("orders")
      .doc(order.id)
      .update(data)
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

  return (
    <section className={style.container}>
      {props.orders.map((orderItem) => (
        <CardOrder
          key={orderItem.id}
          order={orderItem}
          onChangeStatus={changeStatus}
        />
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
