// GuestbookWrite.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import vector from './Vector.png';
import './GuestbookWrite.css'

const GuestbookWrite = () => {
  const navigate = useNavigate();

  const [writeContent, setWriteContent] = useState({
    name: '',
    phone: '',
    nickname: '',
    message: ''
  })

  const submitForm = ()=>{
    Axios.post('http://localhost:8000/api/insert', {
      name: writeContent.name,
      phone: writeContent.phone,
      nickname: writeContent.nickname,
      message: writeContent.message
    }).then(()=>{
      alert('등록 완료!');
      navigate('/guestbook-read');
    })
  }

  const getValue = e => {
    const { name, value } = e.target;
    setWriteContent({
      ...writeContent,
      [name]: value
    })
  };

  return (
    <div className='container'>
      <div className='header'>
        <h className='header-text'>방명록</h>
        <img src={vector} className='vecter' />
      </div>
      <div className='guest-comment'>방명록 작성</div>
      <form className='onSubmit' onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
        <p>닉네임 : <input type="text" name="nickname" 
          value={writeContent.nickname} 
          onChange={getValue}></input></p>
        <p><textarea style={{width:'450px',height:'150px'}}
          name="message" placeholder="당신의 색채에 대해 입력 (30자 이내)"
          value={writeContent.message} 
          onChange={getValue}></textarea></p>
      </form>
      <div className='guest-comment'>개인정보 입력</div>
      <form className='onSubmit' onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
        <p>이름 : <input type="text" name="name" 
        value={writeContent.name} 
        onChange={getValue}></input></p>
        <p>연락처 : <input type="text" name="phone" 
        value={writeContent.phone} 
        onChange={getValue}></input></p>
      </form>
      <p>개인정보는 전시회 종료 후 삭제합니다.</p>
      <div className='button'>
        <button className='submit' onClick={submitForm}>
          제출하기
        </button>
      </div>
    </div>
  );
}

export default GuestbookWrite;