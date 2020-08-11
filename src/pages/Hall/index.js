import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../utils/firebase";
import NavComponent from "../../components/NavComponent";
import NavItem from "../../components/NavItem";
import ProductList from "./newOrder/ProductList";
import OrderHall from "./newOrder/OrderHall";
import ToDelivery from "./ToDelivery";
import style from "./style.module.css";

const orderInitialState = {
  name: "",
  table: 0,
  products: [],
  total: 0,
  status: "new",
  createdAt: null,
};

const nextState = {
  new: "inProgress",
  inProgress: "toDelivery",
  toDelivery: "ready",
};

const calculateTotal = (products) => {
  return products.reduce((accumulator, item) => {
    return accumulator + item.price * item.count;
  }, 0);
};

const getProductIndex = (state, product) => {
  return state.products.findIndex((item) => {
    return item.name === product.name;
  });
};

const addProduct = (state, product) => {
  const index = getProductIndex(state, product);
  if (index === -1) {
    state.products.push({ ...product, count: 1 });
  } else {
    state.products[index].count += 1;
  }
  state.total = calculateTotal(state.products);
  return state;
};

const decreaseProduct = (state, product) => {
  const index = getProductIndex(state, product);
  if (index !== -1) {
    const count = state.products[index].count;
    if (count === 1) {
      state.products.splice(index, 1);
    } else {
      state.products[index].count -= 1;
    }
  }
  state.total = calculateTotal(state.products);
  return state;
};

const removeProduct = (state, product) => {
  const index = getProductIndex(state, product);
  state.products.splice(index, 1);
  state.total = calculateTotal(state.products);
  return state;
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return {
        ...state,
        name: action.payload.name,
      };
    case "changeTable":
      return {
        ...state,
        table: action.payload.table,
      };
    case "addProduct":
      return addProduct(state, action.payload.product);
    case "decreaseProduct":
      return decreaseProduct(state, action.payload.product);
    case "removeProduct":
      return removeProduct(state, action.payload.product);
    case "changeStatus": {
      const newState = {
        ...state,
        status: nextState[state.status],
        createdAt: new Date().getTime(),
      };
      if (newState.status === "inProgress") {
        firebase.firestore().collection("orders").add(newState);
        return {
          name: "",
          table: 0,
          products: [],
          total: 0,
          status: "new",
          createdAt: null,
        }
        // .then(() => (state.order = orderInitialState));
        // limpar pedido
      } else {
        firebase
          .firestore()
          .collection("orders")
          .doc(state.id)
          .update({ status: nextState[state.status] });
      }
      return state;
    }
    
    default:
      throw new Error();
  }
};

const PageHall = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("breakfast");
  const [orders, setOrders] = useState([]);
  const [order, orderDispatch] = useReducer(orderReducer, orderInitialState);
  let { status } = useParams();

  const onChangeStatus = () => {
    orderDispatch({
      type: "changeStatus",
    });
  };

  const addProduct = (product) => {
    orderDispatch({
      type: "addProduct",
      payload: { product },
    });
  };

  const decreaseProduct = (product) => {
    orderDispatch({
      type: "decreaseProduct",
      payload: { product },
    });
  };

  const removeProduct = (product) => {
    orderDispatch({
      type: "removeProduct",
      payload: { product },
    });
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .where("status", "==", status)
      .onSnapshot((orderList) => {
        const itens = [];
        orderList.forEach((doc) => {
          itens.push({ id: doc.id, ...doc.data() });
        });
        setOrders(itens);
      });
  }, [orders, setOrders, status]); //firebase

  useEffect(() => {
    firebase
      .firestore()
      .collection("menu")
      .where("category", "==", category)
      .orderBy("type", "desc")
      .orderBy("name", "asc")
      .onSnapshot((menuItens) => {
        const itens = [];
        menuItens.forEach((doc) => {
          itens.push(doc.data());
        });
        setProducts(itens);
      });
  }, [products, setProducts, category]); //firebase

  return (
    <section className={style.container}>
      <NavComponent>
        <NavItem to="/hall/newOrder">Pedidos Novos</NavItem>
        <NavItem to="/hall/toDelivery">Aguardando Entrega</NavItem>
        <NavItem to="/hall/ready">Pedidos entregues</NavItem>
      </NavComponent>
      {status === "newOrder" ? (
        <section className={style.cardProductOrder}>
          <ProductList
            onAddProduct={addProduct}
            onChangeCategory={setCategory}
            products={products}
          />
          <OrderHall
            order={order}
            dispatch={orderDispatch}
            onAddProduct={addProduct}
            onDecreaseProduct={decreaseProduct}
            onRemoveProduct={removeProduct}
            onChangeStatus={onChangeStatus}
          />
        </section>
      ) : (
        <ToDelivery orders={orders} />
      )}
    </section>
  );
};

export default PageHall;
