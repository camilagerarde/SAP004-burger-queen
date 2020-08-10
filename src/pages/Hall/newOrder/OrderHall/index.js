import React from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import OrderItem from "../../../../components/OrderItem";
import Swal from "sweetalert2";
import style from "./style.module.css";

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

  const verifyOrder = () => {
    if (!props.order.name || !props.order.table || !props.order.total) {
      Swal.fire({
        text: "Preencha todos os campos do pedido!",
        confirmButtonColor: "#334585",
        width: "20rem",
      });
    } else {
      props.onChangeStatus();
    }
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
        <thead>
          <tr>
            <th className={style.firstCollum}> Item </th>
            <th className={style.secondCollum}> Valor </th>
            <th className={style.thirdCollum}> Quant. </th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <h3>{`Total ${props.order.total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`}</h3>
      <Button className={style.buttonSend} onClick={() => verifyOrder()}>
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
