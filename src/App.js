// App.js
import React, { useState, useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Info from './pages/Info';
import Place from './pages/Place';
import Crew from './pages/Crew';
import GoodsPage from './Goodspage';
import MainPage from './Mainpage';
import Guestbook from './Guestbook';
import Recommend from './ecommend';

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
    <div className="App">
      <MobileView>
        <div className='Page'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <div>
                    <Route path='recommend' element={<Recommend />} />
                  </div>
                  <MainPage />
                </>
              }
            />
          </Routes>
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
      </MobileView>
    </div>
  );
}

export default App;
