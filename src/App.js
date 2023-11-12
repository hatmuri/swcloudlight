import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect'
import goods1 from './goods.png';
import vector from './Vector.png';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    // 스크롤 이벤트 처리
    const container = document.querySelector('.container');
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.offsetWidth;
    const index = Math.round(scrollPosition / itemWidth);
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
        <div className='page'>
          
        </div>
        <div className='header'>
          <h className='text1'>굿즈</h>
          <img src={vector} className='vecter'/> <br/>
          <b className='text2'>전시품을 다양한 굿즈로도 간직하실 수 있습니다.</b>
        </div>
        <div className='list'>
          <div className="container">
            <div className="inner">
              <img src={goods1} alt="상품 이미지1" />
            </div>
            <div className="inner">
              <img src={goods1} alt="상품 이미지2" />
            </div>
            <div className="inner">
              <img src={goods1} alt="상품 이미지3" />
            </div>
            <div className="inner">
              <img src={goods1} alt="상품 이미지3" />
            </div>
            <div className="inner">
              <img src={goods1} alt="상품 이미지3" />
            </div>
          </div>
        </div>  
        <div className='current'>
          {[0, 1, 2, 3, 4].map((index) => (
          <img
            key={index}
            src={vector}
            className={`vector2 ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
        </div>   
        <div className='form'>
            <b>구매를 원하시면 form을 작성해주세요</b> <br/>
            <a href='https://www.duksung.ac.kr/main.do?isMaster=N&isLogined=N&viewPrefix=%2FWEB-INF%2Fjsp%2Fcms&urlRootPath=&siteResourcePath=%2Fsite%2Fduksung'>
              <button>구매하기</button>
            </a>
        </div>
        
      </MobileView>
      
    </div>
  );
}

export default App;