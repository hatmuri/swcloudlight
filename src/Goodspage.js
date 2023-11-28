// GoodsPage.js
import React from 'react';
import goods1 from './goods.png';
import vector from './Vector.png';
import './Goodspage.css';
const GoodsPage = ({ currentIndex }) => {

  
  return (
    <div className='all'>
      <div className='header2'>
        <h className='text1'>굿즈</h>
        <img src={vector} className='vector'/> <br/>
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
            <img src={goods1} alt="상품 이미지4" />
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
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdfW38kPfVLdZ18dPbK55ArIW1jTPbqzjqgqhQqXLS0CKbS8w/viewform?usp=send_form'>
          <button>구매하기</button>
        </a>
      </div>
    </div>
  );
}

export default GoodsPage;