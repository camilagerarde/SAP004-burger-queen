import React from "react";
import PropTypes from "prop-types"
import Card from "../../../components/Card";
import Product from "../../../components/Product"


const ProductList = (props) => {
  return(
    <Card>
      {props.products.map((prod) => (
        <Product
          name={prod.name}
          price={prod.price}
          key={prod.name}
          type={prod.type}
        />
      ))}
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