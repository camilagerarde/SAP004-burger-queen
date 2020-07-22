import React from 'react';
import Mrking from './SenhorKing.png';
import style from './style.module.css';

const ComicBurgerPresentation = () => {
  return (
    <section
      className={style.section}
    >
      <img src={Mrking} 
      className={style.img}
      alt="logo"
      />
    </section>
  )
}

export default ComicBurgerPresentation;