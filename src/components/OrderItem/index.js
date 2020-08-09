import React from "react";
import PropTypes from "prop-types";
import Ico from "../Ico";
import style from "./style.module.css";

const OrderItem = (props) => {
  return (
    <li>
      <p className={style.itens}>
        {props.name}
        <Ico onClick={props.onRemove} type="minus" alt="Diminuir quantidade" />
        {props.count}
        <Ico onClick={props.onAdd} type="more" alt="Aumentar quantidade" />
        {props.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
        <Ico type="del" alt="Excluir item" />
      </p>
    </li>
  );
};

OrderItem.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default OrderItem;
