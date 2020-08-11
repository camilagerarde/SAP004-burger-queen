import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import style from './style.module.css';

function NotFound() {
  return (
    <section className={style.container}>
      <img 
        src={logo} 
        alt="Logo" 
        className={style.logo}
      >
      </img>
      <div 
        className={style.box}
      >
        <h1>Ops!</h1>
        <h2>Página não encontrada </h2>
        <Link 
          className={style.link} 
          title="Voltar para Login" 
          to="/"
        >
          VOLTAR
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
