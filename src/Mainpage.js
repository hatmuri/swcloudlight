import { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import React from 'react';
import './Mainpage.css';
import main from './main.png';
import brand from './brand.png';
import {CSSTransition} from 'react-transition-group';
import './ani.scss'

import Info from './pages/Info';
import Place from './pages/Place';
import Crew from './pages/Crew';
import GoodsPage from './Goodspage';
import MainPage from './Mainpage';
import Guestbook from './Guestbook';
import LastExhi from './pages/LastExhi';
import Footer from './Footer';


const Mainpage = () => {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu=()=>{
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else{
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }
  const navigate = useNavigate();
  

  return (
    <div className='App'>
          <div className='Page'>
        <div className='blind'>
          <div>
            <nav>
              <div className='brand'>
                <img src={brand} alt="brand" />
              </div>
              <div className='burger-menu' onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
              </div>
                <CSSTransition
                  in={isMenuClicked}
                  timeout={300}
                  unmountOnExit
                  classNames="menu"
                >
                  <div className={`menu ${menu_class}`}>
                    <ul className="nav-links">
                      <li className='info_exhibition'>
                        <a href="#">전시 안내</a>
                      </li>
                      <li className='info_club'>
                        <a href="#">동아리 안내</a>
                      </li>
                      <li className='goods'>
                        <a href="#">굿즈 소개</a>
                      </li>
                      <li className='recommend'>
                        <a href="#">작품 추천</a>
                      </li>
                      <li className='guest'>
                        <a href="#">방명록</a>
                      </li>
                    </ul>
                  </div>
                </CSSTransition>
              
            </nav>
        </div>
        <div className='blind2'>
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
          
          <div className='main'>
            <div className="one"></div>
          </div> 
          
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