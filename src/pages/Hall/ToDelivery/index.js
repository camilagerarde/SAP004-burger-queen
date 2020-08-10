import React from "react";
import PropTypes from "prop-types";
import CardOrder from "../../../components/CardOrder";
import Button from "../../../components/Button";
import style from "./style.module.css";
import firebase from "../../../utils/firebase"

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
        <CardOrder>
          <ul key={orderItem.id}>
            <li>Atendente: {orderItem.name}</li>{''}
            <li>Mesa:{orderItem.table}</li>{''}
            <li>Pedido</li>{''}
            {orderItem.products.map((prod) => (
              <ul key={prod.name}>
                <li>{prod.count} - {prod.name} </li>{''}
              </ul>
            ))}   
            <li>TOTAL</li>{''}     
            <li>{orderItem.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}{" "}
            </li>
          </ul>
          <Button 
            onClick={() => changeStatus(orderItem)}
            color="lightBlue" 
            size="medium"
          >
            Entregue
          </Button>
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
      products:  PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        })
      )      
    })
  ),
};

orderCards.defaultProps = {
  orders: [],
};

export default orderCards;
