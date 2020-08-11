import React from "react";
import PropTypes from "prop-types";
import Ico from "../Ico";
import style from "./style.module.css";

const OrderItem = (props) => {
  return (
    <tr className={style.table}>
      <td className={style.firstCollum}>{props.name}</td>
      <td className={style.secondCollum}>
        {props.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </td>
      <td className={style.thirdCollum}>
        <Ico
          onClick={props.onDecrease}
          type="minus"
          alt="Diminuir quantidade"
          pointer="yes"
        />
        {props.count}
        <Ico
          onClick={props.onAdd}
          type="more"
          alt="Aumentar quantidade"
          pointer="yes"
        />
        <Ico
          onClick={props.onRemove}
          type="del"
          alt="Excluir item"
          pointer="yes"
        />
      </td>
    </tr>
  );
};

OrderItem.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default OrderItem;
