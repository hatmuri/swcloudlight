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
import Startloading from './startloading';

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
  const [isLoading, setIsLoading] = useState(true);

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
    // 3초 후에 로딩 상태를 false로 변경하여 Mainpage로 이동
    const timeoutId = setTimeout(() => {
      
      setIsLoading(false);
    }, 3000);

    return () => {
      // 타임아웃 클리어
      clearTimeout(timeoutId);
    };
  }, []);


  

  return (
    <div>
      {isLoading ? (
        // 로딩 중에는 startloading.html을 렌더링
        <div className='start2'>
          <Startloading/>
        </div>
        
      ) : (
        // 로딩이 끝나면 앱 내용 렌더링
        <div>
          <div>
            <Header />
          </div>
          <div className='route'>
            <Routes >
              <Route path="/" element={<Mainpage />} />
              <Route path='/Info' element={<Info />} />
              <Route path='/GoodsPage' element={<GoodsPage />} />
              <Route path='/Crew' element={<Crew />} />
              <Route path='/recommend' element={<Recommend />} />
              <Route path='/Guestbook' element={<Guestbook />} />
              <Route path='/Guestbook-read' element={<GuestbookRead />} />
              <Route path='/Guestbook-write' element={<GuestbookWrite />} />
              <Route path='/Mainpage' element={<Mainpage />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;