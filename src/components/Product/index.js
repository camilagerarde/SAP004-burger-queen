import React from "react";
import Button from "../Button";

const types = {
  side: "lightOrange",
  food: "lightRed",
  drink: "lightBlue",
}

const Product = (props) => {
  return (
    <Button
      onClick={props.onClick}
      color={types[props.type]}
    >
      {props.name} - R${props.price}
    </Button>
  );
};

export default Product;