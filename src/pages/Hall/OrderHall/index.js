import React from "react";
import style from "./style.module.css";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import OrderItem from "../../../components/OrderItem";

const OrderHall = (props) => {
  const onChangeName = (event) => {
    const name = event.target.value;
    props.dispatch({
      type: "changeName",
      payload: { name },
    });
  };

  const onChangeTable = (event) => {
    const table = event.target.value;
    props.dispatch({
      type: "changeTable",
      payload: { table },
    });
  };

  return (
    <section className={style.card}>
      <h2>Resumo do pedido</h2>
      <Input
        onChange={onChangeName}
        label="atendente"
        id="nameOrder"
        type="text"
        value={props.order.name}
        border="border"
      />
      <Input
        onChange={onChangeTable}
        label="mesa"
        id="numberTable"
        type="number"
        value={props.order.table}
        border="border"
      />
      <table className={style.table}>
        {props.order.products.map((prod) => (
          <OrderItem
            name={prod.name}
            price={prod.price}
            count={prod.count}
            key={prod.name}
            onAdd={() => props.onAddProduct(prod)}
            onDecrease={() => props.onDecreaseProduct(prod)}
            onRemove={() => props.onRemoveProduct(prod)}
          />
        ))}
      </table>
      <h3>{`Total ${props.order.total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`}</h3>
      <Button
        type="send"
        className={style.buttonSend}
        onClick={() => props.onChangeStatus()}
      >
        Enviar
      </Button>
      {props.children}
    </section>
  );
};

export default OrderHall;

// const removeProduct = (product) => {
//   const delProduct = order.filter((elem) => elem !== product);
//   setOrder([...delProduct]);
//   calculateTotal(product, "remove");
// };

// .toLocaleString("pt-BR", {
//   style: "currency",
//   currency: "BRL",
// })

// <Ico
//                     onClick={() => decreaseProduct(prod)}
//                     type="minus"
//                     alt="Diminuir quantidade"
//                   />

// new Date().getTime(),
