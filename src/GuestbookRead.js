// GuestbookRead.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import vector from './Vector.png';
import Axios from 'axios';
import './GuestbookRead.css'


const GuestbookRead = () => {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate('/Guestbook-write');
  };

  const [viewContent, setViewContent] = useState([]);
  
  useEffect(()=>{
    Axios.get('http://localhost:8000/api/get/all').then((response)=>{
      console.log(response);
      setViewContent(response.data);  // 상태 업데이트
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div className='container'>
      <div className='header'>
        <h className='header-text'>방명록</h>
        <img src={vector} className='vecter' />
      </div>
      <div>
        <div className='event-container'>
          <div className='title'>
            <div className="title-text">
            나의 색채는
            </div>
            <div className="question">
              ?
            </div>
            <div className="title-text">
              이다.
            </div>
          </div>
          <br/>
          <div className='event'>
            <b className='event-txt'>참여 기간</b>
            <b className='text1'>2023.01.08~2023.01.15</b>
          </div>
          <br/>
          <div className='event'>
            <b className='event-txt'>참여 대상</b>
            <b className='text1'>방명록 작성자</b>
          </div>
          <br/>
          <b className='text2'>방명록을 작성하면 이벤트 참여 완료되며,<br/> 개인 정보는 전시회 종료 후 삭제합니다.</b>
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
          {viewContent.map(element =>
            <div className='guest-box'>
              <p className='nickname'>작성자 : {element.nickname}</p>
              <p className='message'>{element.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GuestbookRead;