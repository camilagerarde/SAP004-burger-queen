import React from 'react';
import Mrking from './SenhorKing.png';
import Button from '../../components/Button';
import style from './style.module.css';

const ComicBurgerPresentation = () => {
  return (
    <section
      className={style.section}
    >
      <img src={Mrking} 
      className={style.img}
      />
      <Button>Login</Button>
      <Button>Registre-se</Button>
    </section>
  )
}

export default ComicBurgerPresentation;