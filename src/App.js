import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect'
import ReactDOM from 'react-dom';
import Info from './pages/Info';
import Place from './pages/Place';
import Crew from './pages/Crew';
import GoodsPage from './Goodspage';
import Mainpage from './Mainpage';
import Guestbook from './Guestbook';
import GuestbookRead from './GuestbookRead';
import GuestbookWrite from './GuestbookWrite';
import Header from './pages/Header';
import LastExhi from './pages/LastExhi';
import Footer from './Footer';
import brand from './brand.png';
import Recommend from './recommend';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    // 스크롤 이벤트 처리
    const container = document.querySelector('.container');
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.offsetWidth;
    const index = Math.floor(scrollPosition / itemWidth);
    setCurrentIndex(index);
  };

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
  

  useEffect(() => {
    const container = document.querySelector('.container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
  
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [currentIndex]); 
  

  return (
    
    <div>
      <div>
        <Header/>
      </div>
      <div className='route'>
        <Routes >
          <Route path="/" element={<Mainpage />} />
          <Route path='/Info' element={<Info />} />
          <Route path='/GoodsPage' element={<GoodsPage />} />
          <Route path='/Crew' element={<Crew />} />
          <Route path='/recommend' element={<Recommend />} />
          <Route path='/Guestbook' element={<Guestbook />}/>
          <Route path='/Guestbook-read' element={<GuestbookRead />}/>
          <Route path='/Guestbook-write' element={<GuestbookWrite />}/>
          <Route path='/Mainpage' element={<Mainpage />}/>
        </Routes>
      </div>
        
      

    </div>
  );
}

export default App;