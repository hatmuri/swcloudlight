import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import React from 'react';
import './recommend.css';

const questionList = [
  {q:['질문 1'],
  a:[{type:'A', text:'답변1'}, {type:'B', text:'답변2'}]},
  {q:['질문 2'],
  a:[{type:'A', text:'답변1'}, {type:'B', text:'답변2'}]},
  {q:['질문 3'],
  a:[{type:'A', text:'답변1'}, {type:'B', text:'답변2'}]},
  {q:['질문 4'],
  a:[{type:'A', text:'답변1'}, {type:'B', text:'답변2'}]},
  {q:['질문 5'],
  a:[{type:'A', text:'답변1'}, {type:'B', text:'답변2'}]},
  {q:['테스트가 끝났습니다 결과 ㄱㄱ'],
  a:[{type:'', text:'결과 보러 가기'}]
}
]


export default function Recommend() {

  const [page, setPage] = useState(0)

      return (
      <div className='recommendLayout'>
        {page===0?
          <div className='startPageLayout'>
            <div className='startLogo'>
              <div>시 추천</div>
              <div>↓</div>
            </div>
            <div onClick={()=>setPage(1)} className='startButton'>테스트 시작하기</div>
          </div>
          :
          <div>
            테스트페이지
          </div>
        }
      </div>
    );
  }