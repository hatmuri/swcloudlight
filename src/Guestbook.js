// Guestbook.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import vector from './Vector.png';
import './Guestbook.css';

const Guestbook = () => {
  const navigate = useNavigate();

  const entries = [
    "첫 번째 엔트리",
    "두 번째 엔트리",
    "세 번째 엔트리",
    "네 번째 엔트리",
    "다섯 번째 엔트리",
  ];

  const handleMoreClick = () => {
    // 더보기 버튼 클릭 시 페이지 이동
    navigate('/guestbook-read');
  };
  
  return (
    <div className='container'>
      <div className='flex-container'>
        <div className='header'>
          <h className='text1'>방명록</h>
          <img src={vector} className='vecter' /> <br />
          <b className='text2'>당신의 색채는 무엇인가요?</b>
        </div>
        {entries.map((entry, index) => (
          <div key={index} className={`entry-box entry${index + 1}`}>
            {entry}
          </div>
        ))}
        <div className='button'>
          <Link to="/guestbook-read">더보기</Link>
          {/*<button className='more' onClick={handleMoreClick}>
            더보기
        </button>*/}
        </div>
      </div>
    </div>
  );
}

export default Guestbook;