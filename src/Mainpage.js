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
import LastExhi from './pages/LastExhi';
import Footer from './Footer';
import slide from './slide.png';
import Header from './pages/Header';


const Mainpage = () => {
  const navigate = useNavigate();

  return (
    <div className='App'>

      <div className='Page blind2'>
        <div className='blind2-content'>
          <p className='smallTitle'>제2회 운빛 전시</p>
          <div className='H1'>
            <h1>색채</h1> 
            <h2 className='Comma1'>,</h2>
            
          </div>
          <div className='H1'>
            <h1>빛을</h1>
          </div>
          <div className='H1'>
            <h1>일으키다</h1>
            <h2 className='Comma2'>.</h2>
          </div>
          
          <div className='button'>
            <div className='mainGBbutton' onClick={()=>{navigate("/Guestbook-read")}}>방명록<br/>
            이벤트 참여</div>
            <div className='mainRCbutton' onClick={()=>{navigate("/recommend")}}>작품추천 테스트</div>
          </div>

          <div className='slide'>
            <img src={slide} alt="slide"/>
          </div>
          
          <div className='main'>
            <div className="one"></div>
          </div>   
        </div>
      </div>
      
      <div className='Page'>
        <Info/>
      </div>
      <div className='PagePlace'>
        <br/>
        <Place/>
        <Crew/>
      </div>
      
      <div className='PageGuestBook'>
        <br/>
        <Guestbook/>
      </div>
      <div className='PageGoodsPage'>
        <br/>
        <GoodsPage/>
      </div>
      <div className='PageLastExhi'>
        <br/>
        <LastExhi/>
        
      </div>
      <div className='PageFooter'>
        <br/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Mainpage;

