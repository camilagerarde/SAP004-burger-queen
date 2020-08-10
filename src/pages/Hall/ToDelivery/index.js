import React from "react";
import PropTypes from "prop-types";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import style from "./style.module.css";
import firebase from "../../../utils/firebase";

const nextState = {
  new: "inProgress",
  inProgress: "toDelivery",
  toDelivery: "ready",
};

const orderCards = (props) => {

  const changeStatus = (order) => {
    const status = nextState[order.status]
    firebase.firestore().collection('orders').doc(order.id).update({
      status,
    });
  }

  return (
    <section className={style.container}>
      {props.orders.map((orderItem) => (
        <Card>
          <section key={orderItem.id}>
            <p>{orderItem.id} </p>
            <p>{orderItem.name} </p>
            <p>{orderItem.table} </p>
            <p>{orderItem.status} </p>
            <p>
              {orderItem.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}{" "}
            </p>
          </section>
          <Button 
            onClick={() => changeStatus(orderItem)}
            color="lightBlue" 
            size="medium"
          >
            Entregue
          </Button>
        </Card>
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
      table: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
};

orderCards.defaultProps = {
  orders: [],
};

export default orderCards;
