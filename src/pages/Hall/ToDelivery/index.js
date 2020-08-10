import React from "react";
import PropTypes from "prop-types";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import style from "./style.module.css";

const orderCards = (props) => {
  return (
    <section className={style.container}>
      {props.orders.map((orderItem) => (
        <Card>
          <section key={orderItem.id}>
            <p>{orderItem.id} </p>
            <p> {orderItem.name} </p>
            <p>{orderItem.table} </p>
            <p>{orderItem.status} </p>
            <p>
              {orderItem.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}{" "}
            </p>
          </section>
          <Button color="lightBlue" size="medium">
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
