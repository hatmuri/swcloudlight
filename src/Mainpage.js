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


const Mainpage = () => {
  const navigate = useNavigate();
  
  return (
    <div className='App'>
      <div className='Page blind2'>
        <div className='blind2-content'>
          <p>제 2회 운빛 전시</p>
          <div className='H1'>
            <h1>색채</h1> 
            <img className='h1comma' src={process.env.PUBLIC_URL + '/assets/infomapCircle.png'}/>
          </div>
          <div className='H1'>
            <h1>빛을</h1>
          </div>
          <div className='H1'>
            <h1>일으키다</h1>
            <img className='h1circle' src={process.env.PUBLIC_URL + '/assets/InfoCircle.png'}/>
          </div>
          
          
          <div className='button'>
            <div>방명록</div>
            <div onClick={()=>{navigate("/recommend")}}>작품추천 테스트</div>
          </div>
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
      <div className='PagePlace'>
        <br/>
        <Place/>
      </div>
      <div className='PagePlace'>
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

