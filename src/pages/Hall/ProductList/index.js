import React from "react";
import PropTypes from "prop-types";
import Card from "../../../components/Card";
import Product from "../../../components/Product";
import Button from "../../../components/Button";
import style from  "./style.module.css";

const ProductList = (props) => {
  return(
    <Card>
      <>
        <section
        className={style.buttonMenu}>
          <Button
            onClick={() => props.onChangeCategory('breakfast')}
            color="salmon"
            size="small"
          >
            Café da Manhã
          </Button>
          <Button
            onClick={() => props.onChangeCategory('lunch')}
            color="salmon"
            size="small"
          >
            Almoço e jantar
          </Button>
        </section>
        <section
        className={style.cardMenu}>
        {props.products.map((prod) => (
          <Product
            onClick={props.onClick}
            name={prod.name}
            price={prod.price}
            key={prod.name}
            type={prod.type}
          />
        ))}
        </section>
      </>
    </Card>
  )
}

ProductList.propTypes = {
  products:PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["food","drink","side", "additional"])
  }))
}

ProductList.defaultProps = {
  products: []
}

export default ProductList