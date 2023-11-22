import { Routes, Route, Link } from 'react-router-dom'
import { MobileView } from 'react-device-detect';
import { useState } from 'react';
import './recommend.css';

const questionList = [
  {q:['질문 1'],
  a:[{type:'A', text:'답변1'}, {type:'B', text:'답변2'},
    {type:'C', text:'답변3'}, {type:'D', text:'답변4'}
  ]},
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

  const [poetList, setPoetList] = useState([
    {name: 'A', count:0}, {name: 'B', count:0}
  ])

  const handleCkAnswer = (type, idx) => {
    let ls = poetList
    for (let i = 0; i<ls.length; i++){
      if (ls[i].name===type){
        ls[i].count = ls[i].count+1 //이거 수식 변경
      }
    }

    setPoetList(ls)
    setPage(page+1)

    if(idx+1 === questionList.length){
      console.log('결과 보기')
    }
  }
      return (
      <div className='recommendLayout'>
        {page===0?
          <div className='startPageLayout'>
            <div className='startLogo'>
              <div>시 추천 테스트</div>
              <div>당신에게 맞는 시는 어떤 시일까요?</div>
            </div>
            <div onClick={()=>setPage(1)} className='startButton'>테스트 시작</div>
          </div>
          :page <= questionList.length?
          <div className='questionLayout'>
            <div class='questTitle'>
              <div>시 추천 테스트</div>
              <div>{`${page} / ${questionList.length}`}</div>
            </div>

            {questionList.map((val,idx) =>
              <div class='questionList' style={{display:page===(idx*1+1)?'flex':'none'}} key={idx}>
                {console.log()}
                <div className='questionItemLayout'>
                  <div className='chatListLayout'>
                    {val.q.map((qval,qidx)=>
                      <div key={qidx} className='chatBox'>
                        <div>←</div> <div>{qval}</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className='answerItemLayout'>
                  {val.a.map((aval, aidx)=>
                    <div key={aidx} className='answerBox' onClick={()=>handleCkAnswer(aval.type, idx)}>
                      {aval.text}
                    </div>
                  )}
                </div>
              </div>             
            )}
          </div>
          :
          <div>
            결과페이지
          </div>
        }
      </div>
    );
  }