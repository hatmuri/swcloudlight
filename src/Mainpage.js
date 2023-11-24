
import React from 'react';
import './Mainpage.css';
import menu from './menu.png';
import main from './main.png';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';

const Mainpage = () => {
  const navigate = useNavigate();

  const handleguestClick = () => {
    navigate('/guestbook-read');
  };

  return (
    <div className='blind'>
      <div className='menu'>
        <p>색채, 빛을 일으키다.</p>
        <img src={menu} alt="menu" />
      </div>
      <div className='blind2'>
        <p>제 2회 운빛 전시</p>
        <h1>색채,</h1> 
        <h1>빛을</h1>
        <h1>일으키다.</h1> 
        <div className='main'>
          <img src={main} alt="main" />
        </div>
      </div>
      <div className='button'>
          <button className='guest' onClick={handleguestClick}>
            방명록
          </button>
        </div>
    </div>

  );
}

export default Mainpage;
