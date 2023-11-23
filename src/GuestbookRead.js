// GuestbookRead.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GuestbookRead.css'

const GuestbookRead = () => {
  return (
    <div className='container'>
      <div className='event-container'>
        <h className='text1'>이벤트</h><br/>
        <b className='text2'>이벤트 기간 : 2023.01.08~2023.01.15</b><br/>
        <b className='text2'>참여 대상 : 방명록 작성자</b>
      </div>
      
    </div>
  );
}

export default GuestbookRead;
