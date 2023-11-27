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
        {viewContent.map(element =>
            <div className='guest-box'>
              <p>{element.message}</p>
            </div>
          )}
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