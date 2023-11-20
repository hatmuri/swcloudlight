
import React from 'react';
import './Mainpage.css';
import menu from './menu.png';
import main from './main.png';

const Mainpage = () => {
  return (
    <div className='blind'>
      <div className='menu'>
        <p>색체, 빛을 일으키다.</p>
        <img src={menu} alt="menu" />
      </div>
      <h1>색체,</h1> 
      <h1>빛을</h1>
      <h1>일으키다.</h1> 
      <div className='main'>
        <img src={main} alt="main" />
      </div>
    </div>

  );
}

export default Mainpage;
