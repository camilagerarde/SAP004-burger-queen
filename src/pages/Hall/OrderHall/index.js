import React from 'react';
import style from './style.module.css';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const OrderHall = (props) => {
  return (
    <section
      className={style.card}
    >
      <h2>
        Resumo do pedido
      </h2>
      <Input
        label="nome"
        id="nameOrder"
        type="text"
        value={props.order.name}
      />
      <Input
        label="mesa"
        id="numberTable"
        type="number"
        value={props.order.table}
      />
      <ul>
      {props.order.products.map((prod) => (
        <li>
          {prod.name}-{prod.price}-{prod.count}

        </li>

      ))}
      </ul>
      <h3>
      {`Total ${props.order.total}`}
      </h3>
      <Button 
        type="send"
        className={style.buttonSend}
      >
        Enviar
      </Button>
      {props.children}
    </section>
  )
}

export default OrderHall;