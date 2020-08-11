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


const formatCurrency = (value) =>{
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

}
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
        <CardOrder
          key={orderItem.id}
        >
          <section key={orderItem.id}>
            <p>Atendente: {orderItem.name}</p>
            <p>Mesa:{orderItem.table}</p>
            <h3>Pedido</h3>
            {orderItem.products.map((prod) => (
              <ul 
              key={prod.name}
              className={style.orderItem}
              >
                <li>{prod.count} - {prod.name} </li>
              </ul>
            ))}   
            <h3>TOTAL:
            {formatCurrency(orderItem.total)}
            </h3> 
          </section>
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
