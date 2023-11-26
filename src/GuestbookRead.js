// GuestbookRead.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import vector from './Vector.png';
import Axios from 'axios';
import './GuestbookRead.css'

const GuestbookRead = () => {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate('/guestbook-write');
  };

  const texts = ['최고', '전시회', '재밌다', '굿굿', '운빛', '덕성', '안녕'];

  return (
    <div className='container'>
      <div className='header'>
        <h className='header-text'>방명록</h>
        <img src={vector} className='vecter' />
      </div>
      <div>
        <div className='event-container'>
          <div className='title'>

          </div>
          <div className="title-text">
          나의 색채는
          </div>
          <div className="question">
            ?
          </div>
          <div className="title-text">
            이다.
          </div>
          <br/>
          <div className='event'>
            <div className='event-txt'>
              <b>참여 기간</b>
            </div>
          </div>
          <b className='text1'>2023.01.08~2023.01.15</b><br/>
          <br/>
          <div className='event'>
            <div className='event-txt'>
              <b>참여 대상</b>
            </div>
          </div>
          <b className='text1'>방명록 작성자</b>
          <br/>
          <b className='text2'>방명록을 작성하면 이벤트 참여 완료되며, 개인 정보는 전시회 종료 후 삭제합니다.</b>
          <br/>
        </div>
        
        <div className="buttonContainer">
          <div className='button'>
            <button className='guest' onClick={handleWriteClick}>
              작성하기
            </button>
          </div>
        </div>
        <div className='guest-comment'>방문객의 색채들</div>
        <div className='shape-container'>
          {texts.map((text, index) => (
            <div key={index} className='shape'>
              <div className='shape-content'>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuestbookRead;
