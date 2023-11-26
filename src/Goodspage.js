// Guestbook.js
import React from 'react';
import './Guestbook.css';
const Guestbook = ({ currentIndex }) => {
    const guestbookEntries = [
        '안녕하세요',
        '덕성여자대학교',
        '운빛 전시',
        '최고최고',
        '짱짱'
    ];
  
  const squareData = [
    { backgroundColor: 'linear-gradient(0deg, #C1E8DB, #C1E8DB)', guestbookEntries: guestbookEntries[0]},
    { backgroundColor: 'linear-gradient(0deg, #CDE9DE, #CDE9DE)', guestbookEntries: guestbookEntries[1]},
    { backgroundColor: 'linear-gradient(0deg, #DCE9E1, #DCE9E1)', guestbookEntries: guestbookEntries[2]},
    { backgroundColor: 'linear-gradient(0deg, #E8E9E5, #E8E9E5)', guestbookEntries: guestbookEntries[3]},
    { backgroundColor: 'linear-gradient(180deg, #E9E9E5 0%, rgba(233, 233, 229, 0) ', guestbookEntries: guestbookEntries[4]},
  ];

  return (
    <div className='container'>
      <div className='header'>
        <h className='text1'>방명록</h>
        <b className='text2'>당신의 색채는 무엇인가요?</b>
      </div>
      <div className='guestbook-entries'>
        {squareData.map((data, index) => (
          <div key={index} className='entry-box' style={{ background: data.backgroundColor }}>
          <p>{data.guestbookEntry}</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Guestbook;