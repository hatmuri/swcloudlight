import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect'
import GoodsPage from './Goodspage';
import MainPage from './Mainpage';

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
          <MainPage/>
        </div>
        <div className='Page'>
          <GoodsPage/>
        </div>
      </MobileView>
      
    </div>
  );
}

export default App;