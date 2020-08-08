import React, { useState, useEffect, useReducer } from "react";
import ProductList from "./ProductList";
import NavComponent from "../../components/NavComponent";
import NavItem from "../../components/NavItem";
import firebase from "../../utils/firebase";
import style from "./style.module.css";
import OrderHall from "./OrderHall";

const orderInitialState = {
  name:'',
  table:'',
  products: [],
  total: 0,
  status: 'new',
  createdAt:null,
}

const calculateTotal = (products) =>{
  return products.reduce((accumulator, item) => {
    return accumulator+(item.price*item.count)
  }, 0)
}

const getProductIndex = (state, product) => {
  return  state.products.findIndex((item) => {
    return item.name === product.name
  })
}

const addProduct = (state, product) => {
  const index = getProductIndex(state, product)
  if(index===-1){
    state.products.push({...product, count: 1})
  } else{
    state.products[index].count +=1;
  }
  state.total = calculateTotal(state.products)
  return state;
}

const removeProduct = (state, product) => {
  const index = getProductIndex(state, product)
  if(index!==-1){
    const count = state.products[index].count
    if (count === 1){
      state.products.splice(index,1)
    } else {
      state.products[index].count -=1;
    }
  }
  state.total = calculateTotal(state.products)
  return state;
}


const orderReducer = (state, action) => {
  switch (action.type) {
    case 'changeName':
      return {
        ...state,
        name: action.payload.name,
      }
    case 'changeTable':
      return {
        ...state,
        table: action.payload.table
      }
    case 'addProduct':
      return addProduct(state, action.payload.product);
    case 'removeProduct':
      return removeProduct(state, action.payload.product);
    default:
      throw new Error();
  }
}

const PageHall = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("breakfast");
  const [order, orderDispatch] = useReducer(orderReducer, orderInitialState);
  const addProduct = (product) => {
    orderDispatch({
      type:'addProduct',
      payload: {product }
    })
  }
  const removeProduct = (product) => {
    orderDispatch({
      type:'removeProduct',
      payload: {product }
    })
  }



  useEffect(() => {
    firebase
      .firestore()
      .collection("menu")
      .where("category", "==", category)
      .onSnapshot((menuItens) => {
        const itens = [];
        menuItens.forEach((doc) => {
          itens.push(doc.data());
        });
        setProducts(itens);
      });
  }, [products, setProducts, category]);

  return (
    <section className={style.container}>
      <NavComponent>
        <NavItem to="/hall/newOrder">Pedidos Novos</NavItem>
        <NavItem to="/hall/ready">Pedidos Prontos</NavItem>
        <NavItem to="/hall/delivered">Pedidos entregues</NavItem>
      </NavComponent>
      <section
      className={style.cardProductOrder}>
        <ProductList 
          onAddProduct={addProduct}
          onChangeCategory={setCategory} 
          products={products} 
        />
        <OrderHall
          order={order}
          dispatch={orderDispatch}
          onAddProduct={addProduct}
          onRemoveProduct={removeProduct}
        />
      </section>
    </section>
  );
};

export default PageHall;
