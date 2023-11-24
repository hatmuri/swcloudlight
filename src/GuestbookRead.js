// GuestbookRead.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import vector from './Vector.png';
import axios from 'axios';
import './GuestbookRead.css'

const GuestbookRead = () => {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    // 더보기 버튼 클릭 시 페이지 이동
    navigate('/guestbook-write');
  };

  return (
    <div className='container'>
      <div>
      <div className='event-container'>
        <h className='text1'>이벤트</h><br/>
        <b className='text2'>이벤트 기간 : 2023.01.08~2023.01.15</b><br/>
        <b className='text2'>참여 대상 : 방명록 작성자</b>
      </div>
      <div className='guest-head'>
          <h className='text1'>나의 색채는 ? 이다.</h>
          <img src={vector} className='vecter' /> <br />
        </div>
      <div className='button'>
        {/*<Link to="/guestbook-write">작성하기</Link>*/}
        <button className='write' onClick={handleWriteClick}>
            작성하기
        </button>
      </div>
      <div className='guest-comment'>방문객의 색채들</div>

      </div>
      
    </div>
  );
}

export default GuestbookRead;
