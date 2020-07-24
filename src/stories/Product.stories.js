import React from "react";
import { action } from "@storybook/addon-actions";
import Product from "../components/Product";


export default {
  title: "Product",
  component: Product,
};

export const Food= () => 
  <Product
    name="Misto Quente"
    price={10}
    type="food"
    onClick={action("clicked")}
  />;

export const Drink= () => 
  <Product
    name="Café Americano"
    price={5}
    type="drink"
    onClick={action("clicked")}
  />;

export const Side= () => 
  <Product
    name="Batata Frita"
    price={5}
    type="side"
    onClick={action("clicked")}
  />;