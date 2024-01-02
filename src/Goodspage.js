// GoodsPage.js
import React, { useState, useEffect, useRef } from 'react';
import item1 from './item1.png';
import image_loading from './image_loading.jpg'
import vector from './Vector.png';
import vector2 from './blackdot.png';
import './Goodspage.css';

const GoodsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const containers = document.querySelectorAll('.container');
  
    containers.forEach(container => {
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.offsetWidth;
      

      let index;
      if(scrollPosition<180){
        index=0;
      } else if (scrollPosition >= 180 && scrollPosition < 380) {
        index = 1;
      } else if (scrollPosition >= 380 && scrollPosition < 650) {
        index = 2;
      } else if (scrollPosition >= 650 && scrollPosition < 800) {
        index = 3;
      } else {
        index=4;
      }

      setCurrentIndex(index);

      // const index = Math.round(scrollPosition / itemWidth);
      // console.log('Scroll Position:', scrollPosition);
      // console.log('Item Width:', itemWidth);
      // console.log('Current Index:', index);
    });
  };

  useEffect(() => {
    const containers = document.querySelectorAll('.container');
  
    containers.forEach(container => {
      container.addEventListener('scroll', handleScroll);
    });
  
    return () => {
      containers.forEach(container => {
        container.removeEventListener('scroll', handleScroll);
      });
    };
  }, [currentIndex]); 

  const handleVectorClick = (index) => {
    let scrollPosition;

    // 클릭된 벡터에 따라 스크롤 위치 이동
    switch (index) {
      case 0:
        scrollPosition = 0;
        break;
      case 1:
        scrollPosition = 188;
        break;
      case 2:
        scrollPosition = 436;
        break;
      case 3:
        scrollPosition = 680;
        break;
      case 4:
        scrollPosition = 874;
        break;
      default:
        scrollPosition = 0;
    }

    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth', 
    });
  };

  return (
    <div className='all'>
      <div className='header2'>
        <h className='text1'>굿즈</h>
        <img src={vector} className='vector'/> <br/>
        <b className='text2'>전시품을 다양한 굿즈로도 간직하실 수 있습니다.</b>
      </div>
      <div className='list'>
        <div className="container" ref={containerRef}>
          <div className="inner">
            <img src={item1} alt="상품 이미지1" />
          </div>
          <div className="inner">
            <img src={image_loading} alt="상품 이미지2" />
          </div>
          <div className="inner">
            <img src={item1} alt="상품 이미지3" />
          </div>
        </div>
      </div>  
      <div className='current'>
        {[0, 1, 2 ].map((index) => (
          <img
            key={index}
            className='vector2'
            src={currentIndex === index ? vector2 : vector}
            onClick={() => handleVectorClick(index)}
          />
        ))}
      </div>   
      <div className='form'>
        <b>구매를 원하시면 form을 작성해주세요</b> <br/>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSd9KUIlDzxVQVlHjHdf6tby5eKRpK_G4SqwSiEyPdq2Lvw5lQ/viewform'>
          <button>구매하기</button>
        </a>
      </div>
    </div>
  );
}

export default GoodsPage;