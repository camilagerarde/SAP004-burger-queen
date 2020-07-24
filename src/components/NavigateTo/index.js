import React from "react";
import { Link } from "react-router-dom";

const NavigateTo = () => {
  return (
      <>
          <nav>
            <ul>
              <li>
                <Link to="/hall/new">Novo Pedido</Link>
              </li>
              <li>
                <Link to="/hall/ready">Pedidos Prontos</Link>
              </li>
              <li>
                <Link to="/hall/delivered">Pedidos entregues</Link>
              </li>
            </ul>
          </nav>
      </>
    );
  };

  export default NavigateTo;
