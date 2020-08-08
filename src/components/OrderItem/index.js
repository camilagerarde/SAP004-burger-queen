import React from 'react';
import PropTypes from 'prop-types'
import Button from '../Button';

const OrderItem = (props) => {
  return (
    <li>
      {props.name}
      <Button
      onClick={props.onRemove}>-</Button>
      {props.count}
      <Button
      onClick={props.onAdd}>+</Button>
    </li>
  )
}

OrderItem.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}


export default OrderItem