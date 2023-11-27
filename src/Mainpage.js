// Mainpage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css';
import './ani.scss'

import Info from './pages/Info';
import Place from './pages/Place';
import Crew from './pages/Crew';
import GoodsPage from './Goodspage';
import Guestbook from './Guestbook';

const Mainpage = () => {
  const navigate = useNavigate();
  
  return (
    <div className='App'>
      <div className='Page blind2'>
        <div className='blind2-content'>
          <p>제 2회 운빛 전시</p>
          <h1>색채,</h1> 
          <h1>빛을</h1>
          <h1>일으키다.</h1>
          <div className='buttonContainer'>
            <div className='button'>
              <div onClick={()=>{navigate("/Guestbook-read")}}>방명록</div>
              <div onClick={()=>{navigate("/recommend")}}>작품추천 테스트</div>
            </div>
          </div>
          
          <div className='main'>
            <div className="one"></div>
          </div>   
        </div>
      </div>
      <div className='Page'>
        <br/>
        <Info/>
      </div>
      <div className='Page'>
        <br/>
        <Place/>
      </div>
      <div className='Page'>
        <br/>
        <Crew/>
      </div>
      <div className='Page'>
        <br/>
        <Guestbook/>
      </div>
      <div className='Page'>
        <br/>
        <GoodsPage/>
      </div>
    </div>
  );
}

export default Mainpage;