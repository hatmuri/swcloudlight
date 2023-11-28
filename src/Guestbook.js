// Guestbook.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import vector from './Vector.png';
import './Guestbook.css';

const Guestbook = () => {
  const navigate = useNavigate();

  const [viewContent, setViewContent] = useState([]);
  
  useEffect(()=>{
    Axios.get('http://localhost:8000/api/get').then((response)=>{
      console.log(response);
      setViewContent(response.data);  // 상태 업데이트
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);
  
  const colors = ['rgba(250, 197, 192, 0.6)','rgba(237, 204, 197, 0.6)','rgba(221, 213, 202, 0.6)',
  'rgba(213, 217, 205, 0.6)','rgba(233, 233, 229, 0.6)','rgba(196, 225, 211, 0.6)','rgba(182, 232, 215, 0.6)']

  return (
    <div className='container'>
      <div className='flex-container'>
        <div className='header_guest'>
          <h className='text1'>방명록</h>
          <img src={vector} className='vecter' /> <br />
          <b className='text2'>당신의 색채는 무엇인가요?</b>
        </div>
        <div className='write-button' onClick={()=>{navigate("/Guestbook-write")}}>작성하기</div>
        <div className='text3'>방문객의 색채들</div>
        <div className="color-box-container">
        {colors.map((color, index) => (
          <div key={index} className="color-box" style={{ backgroundColor: color }}>
            {viewContent[index] ? viewContent[index].message : '메시지가 없습니다.'}
          </div>
        ))}
        </div>
        <div className='more' onClick={()=>{navigate("/Guestbook-read")}}>더보기</div>
      </div>
    </div>
  );
}

export default Guestbook;