// GuestbookRead.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import vector from './Vector.png';
import Axios from 'axios';
import './GuestbookRead.css'
import next from './Polygon 1.png'
import previous from './Polygon 2.png'


const GuestbookRead = () => {
  const navigate = useNavigate();
  
  const [viewContent, setViewContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  useEffect(()=>{
    Axios.get('http://localhost:8000/api/get/all').then((response)=>{
      console.log(response);
      setViewContent(response.data);  // 상태 업데이트
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = viewContent.slice(indexOfFirstItem, indexOfLastItem);

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
            <b className='event-text'>참여 기간</b>
            <b className='text1'>2023.01.08~2023.01.15</b>
          </div>
          <br/>
          <div className='event'>
            <b className='event-text'>참여 대상</b>
            <b className='text1'>방명록 작성자</b>
          </div>
          <br/>
          <b className='text2'>방명록을 작성하면 이벤트 참여 완료되며,<br/> 개인 정보는 전시회 종료 후 삭제합니다.</b>
        </div>
        <br/>
        <div className='readpage-write-button' onClick={()=>{navigate("/Guestbook-write")}}>작성하기</div>
        <div className='guest-comment'>방문객의 색채들</div><br/>
        <div className='guest-container'>
          <div className='pre-button' onClick={() => setCurrentPage(currentPage - 1)}>
            <img src={previous}/>
          </div>
          <div className='shape-container'>
            {currentItems.map((element, index) => (
              <div className='guest-box'>
                {/*<p className='nickname'>작성자 : {element.nickname}</p>*/}
                <p className='message'>{element.message}</p>
              </div>
            ))}
          </div>
          <div className='next-button' onClick={() => setCurrentPage(currentPage + 1)}>
            <img src={next}/>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default GuestbookRead;