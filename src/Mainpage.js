import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import React from 'react';
import './Mainpage.css';
import Recommend from './recommend';
import menu from './menu.png';
import main from './main.png';
import Info from './pages/Info';
import Place from './pages/Place';
import Crew from './pages/Crew';
import GoodsPage from './Goodspage';
import MainPage from './Mainpage';
import Guestbook from './Guestbook';

const Mainpage = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <MobileView>
        <div className='Mainpage'>
          <div className='Page'>
          <div className='blind'>
      <div className='menu'>
        <p>색채, 빛을 일으키다.</p>
        <img src={menu} alt="menu" />
                <div>
          <Routes>
          <Route path='recommend' element={<Recommend />} />
          </Routes>
        </div>
      </div>
      <div className='blind2'>
        <p>제 2회 운빛 전시</p>
        <h1>색채,</h1> 
        <h1>빛을</h1>
        <h1>일으키다.</h1> 
        <div className='main'>
          <img src={main} alt="main" />
          <div>방명록</div>
          <div onClick={()=>{navigate("/recommend")}}>작품추천 테스트</div>
        </div>
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
      </MobileView>
    </div>

  );
}

export default Mainpage;
