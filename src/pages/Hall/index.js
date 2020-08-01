import React,{useState, useEffect} from "react";
import ProductList from "./ProductList";
import NavComponent from "../../components/NavComponent";
import NavItem from "../../components/NavItem";
import firebase from "../../utils/firebase";

const PageHall = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    firebase.firestore()
    .collection("menu")
    .onSnapshot((menuItens) => {
      const itens = [];
      menuItens.forEach((doc) => {
        itens.push(doc.data())
      });
      setProducts(itens);
    })
  }, []); 

  return (
    <section>
      <NavComponent>
        <NavItem to="/hall/newOrder">Pedidos Novos</NavItem>
        <NavItem to="/hall/ready">Pedidos Prontos</NavItem>
        <NavItem to="/hall/delivered">Pedidos entregues</NavItem>
      </NavComponent>
      <ProductList 
        products={products}
      />
    </section> 
  );
};

export default PageHall;
