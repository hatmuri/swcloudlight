import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { MobileView } from 'react-device-detect';
import { useState } from 'react';
import './recommend.css';

const questionList = [
  {q:['질문 1'],
  a:[{type:'A1', text:'답변1'}, {type:'B1', text:'답변2'},
    {type:'C1', text:'답변3'}, {type:'D1', text:'답변4'}
  ]},
  {q:['질문 2'],
  a:[{type:'A2', text:'답변1'}, {type:'B2', text:'답변2'}]},
  {q:['질문 3'],
  a:[{type:'A3', text:'답변1'}, {type:'B3', text:'답변2'}]},
  {q:['질문 4'],
  a:[{type:'A4', text:'답변1'}, {type:'B4', text:'답변2'}]},
  {q:['테스트가 끝났습니다 결과 ㄱㄱ'],
  a:[{type:'', text:'결과 보러 가기'}]
}
]


export default function Recommend() {

  const [page, setPage] = useState(0)

  const [poetList, setPoetList] = useState([
    {name: 'A1', count:0}, {name: 'B1', count:0}, {name: 'C1', count:0}, {name: 'D1', count:0},
    {name: 'A2', count:0}, {name: 'B2', count:0}, {name: 'A3', count:0}, {name: 'B3', count:0},
    {name: 'A4', count:0}, {name: 'B4', count:0},
  ])

  const [resultContents, setResultContents] = useState({})

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
      setResult()
    }
    
    function setResult() {
      let mc = [
        {result:'A1A2A3A4', contents:['시 제목1', '시 저자1', '시 내용']},
        {result:'A1B2C1D1', contents:['시 제목2', '시 저자2', '시 내용']},
        {result:'', contents:['시 제목3', '시 저자3', '시 내용']},
        {result:'', contents:['시 제목4', '시 저자4', '시 내용']},
        {result:'', contents:['시 제목5', '시 저자5', '시 내용']},
        {result:'', contents:['시 제목6', '시 저자6', '시 내용']},
        {result:'', contents:['시 제목7', '시 저자7', '시 내용']},
        {result:'', contents:['시 제목8', '시 저자8', '시 내용']},
        {result:'', contents:['시 제목9', '시 저자9', '시 내용']},
        {result:'', contents:['시 제목10', '시 저자10', '시 내용']},
        {result:'', contents:['시 제목11', '시 저자11', '시 내용']}
      ]

      //if 절로 변경? 부등호로 연결하면 안되는데
      let AorB1 = 
        poetList.find(function(data){return data.name === 'A1'}).count >
        poetList.find(function(data){return data.name === 'B1'}).count? 'A1':'B1'
        
      let AorB2 = 
        poetList.find(function(data){return data.name === 'A2'}).count >
        poetList.find(function(data){return data.name === 'B2'}).count? 'A2':'B2'
      
      let AorB3 = 
        poetList.find(function(data){return data.name === 'A3'}).count >
        poetList.find(function(data){return data.name === 'B3'}).count? 'A3':'B3'

      let AorB4 = 
        poetList.find(function(data){return data.name === 'A4'}).count >
        poetList.find(function(data){return data.name === 'B4'}).count? 'A4':'B4'

      let result = AorB1+AorB2+AorB3+AorB4

      const foundResult = mc.find((val)=>val.result === result)
      console.log(foundResult); // Log foundResult for debugging
      setResultContents(foundResult || {result: result, contents: []})
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
            <div className="resultLayout">
              <div className='resultTitle'>
                <div>시 추천 테스트</div>
                <div onClick={()=>window.location.reload()}>다시 하기</div>
              </div>
              <div className='resultList' style={{display: 'flex'}}>
                <div>{resultContents.result}</div>
                <div>{resultContents.contents[0]}</div>
                <div className='resultItemLayout'>
                      <div className='chatBox'>
                        <div>당신의 시는 {resultContents.result}입니다.</div>
                      </div>

                      {resultContents.contents.map((val, idx)=> (
                        <div className='chatBox' key={idx}>
                          <div>{val}</div>  
                        </div>
                        )
                      )}
                      
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }