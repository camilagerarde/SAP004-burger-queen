import React from "react";
import Button from "../Button";

const types = {
  title:"salmon",
  side: "lightOrange",
  food: "lightRed",
  drink: "lightBlue",
}

const Product = (props) => {
  return (
    <Button
      onClick={props.onClick}
      color={types[props.type]}
      size="medium"
    >
      {props.name} - R${props.price}
    </Button>
  );
};

export default Product;