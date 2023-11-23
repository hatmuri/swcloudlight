import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate, Router } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect'
import ReactDOM from 'react-dom';
import Recommend from './recommend';
import GuestbookRead from './GuestbookRead';
import GuestbookWrite from './GuestbookWrite';
import * as Components from './components';


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
        <Routes>
          <Route path="/" element={<>
            <Components.MainPage />
            <Components.Info />
            <Components.Place />
            <Components.Crew />
            <Components.Guestbook />
            <Components.GoodsPage />
          </>} />
          <Route path="/guestbook-read" element={<GuestbookRead />} />
          <Route path="/guestbook-write" element={<GuestbookWrite />} />
        </Routes>
      </MobileView>
  </div>
    
  );
}

export default App;