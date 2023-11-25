import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { MobileView } from 'react-device-detect';
import './recommend.css';

const questionList = [
  {q:['오늘 드디어 열심히 준비하던 프로젝트가 끝나는 날입니다. 이번 프로젝트가 끝나면 당신에게 어떤 것이 기다리고 있을까요?'],
  a:[{type:'A1', text:'프로젝트가 끝나면 수고한 나만을 위한 선물을 사고 말 거에요.'},
    {type:'B1', text:'고생한 나를 위해 훌쩍 어디론가 떠나는 여행이 계획되어 있겠죠.'},
    {type:'C1', text:'함께 한 사람들과 함께 즐거운 먹부림 party가 기다리고 있을 것 같아요.'}
  ]},
  {q:['당신의 가장 소중한 존재가 연락 하나 남기지 않고 사라졌습니다. 어떻게 할 건가요?'],
  a:[{type:'A2', text:'가장 소중한 존재가 사라진 소식에 절망하며 울 거 같아요.'},
    {type:'B2', text:'내 인생에서 소중한 존재를 되찾기 위한 여정을  떠날 것 같아요.'},
    {type:'C2', text:'그 사람의 선택이겠죠? 저만의 새로운 시작을 할 것 같아요.'}
  ]},
  {q:['산책 중에 길을 잃었습니다. 당신의 앞에는 두 갈래 길이 있습니다. 어디로 갈까요?'],
  a:[{type:'A3', text:'그래도 화살표 표지판이 있는 오른쪽 길로 가는 게 맞는 거 같아요.'},
    {type:'B3', text:'인생은 도박! 화살표 표지판이 없는 왼쪽 길로 갑니다!'},
    {type:'C3', text:'뒤를 돌아서 왔던 길로 가며 다른 길을 찾아볼게요.'}
  ]},
  {q:['오랜만에 오는 한가한 주말입니다. 특별한 약속도 없이 아침에 번쩍 눈이 떠집니다. 당신은 무엇을 하나요?'],
  a:[{type:'A4', text:'어째서, 지금 이 시간에 눈을? 다시 자려고 이불을 뒤집어씁니다.'},
    {type:'B4', text:'이왕 일찍 일어난 거, 하루를 길게 살아볼까요? 오늘 하루 계획을 세웁니다.'},
    {type:'C4', text:'문득 가고 싶었던 곳이 생각나요. 바로 옷을 챙겨 입어 나가요!'}
  ]},
  {q:['테스트가 끝났습니다. 나에게 어울리는 시가 궁금하신가요?'],
  a:[{type:'', text:'결과 보러 가기'}]
}
]


export default function Recommend() {

  const [page, setPage] = useState(0)

  const [poetList, setPoetList] = useState([
    {name: 'A1', count:0}, {name: 'B1', count:0}, {name: 'C1', count:0},
    {name: 'A2', count:0}, {name: 'B2', count:0}, {name: 'C2', count:0},
    {name: 'A3', count:0}, {name: 'B3', count:0}, {name: 'C3', count:0},
    {name: 'A4', count:0}, {name: 'B4', count:0}, {name: 'C4', count:0},
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
        {result:'A1A2A3A4', contents:['시 제목1', '시 저자1', '마라샹궈 너무 먹고싶어 미친']},
        {result:'A1A2A3B4', contents:['시 제목2', '시 저자2', '시 내용']},
        {result:'A1A2A3C4', contents:['시 제목3', '시 저자3', '시 내용']},
        {result:'A1A2B3A4', contents:['시 제목4', '시 저자4', '시 내용']},
        {result:'A1A2B3B4', contents:['시 제목5', '시 저자5', '시 내용']},
        {result:'A1A2B3C4', contents:['시 제목6', '시 저자6', '시 내용']},
        {result:'A1A2C3A4', contents:['시 제목7', '시 저자7', '시 내용']},
        {result:'A1A2C3B4', contents:['시 제목8', '시 저자8', '시 내용']},
        {result:'A1A2C3C4', contents:['시 제목9', '시 저자9', '시 내용']},
        {result:'A1B2A3A4', contents:['시 제목10', '시 저자10', '시 내용']},
        {result:'A1B2A3B4', contents:['시 제목11', '시 저자11', '시 내용']},
        {result:'A1B2A3C4', contents:['시 제목12', '시 저자12', '시 내용']},
        {result:'A1B2B3A4', contents:['시 제목13', '시 저자13', '시 내용']},
        {result:'A1B2B3B4', contents:['시 제목14', '시 저자11', '시 내용']},
        {result:'A1B2B3C4', contents:['시 제목15', '시 저자11', '시 내용']},
        {result:'A1B2C3A4', contents:['시 제목16', '시 저자11', '시 내용']},
        {result:'A1B2C3B4', contents:['시 제목17', '시 저자11', '시 내용']},
        {result:'A1B2C3C4', contents:['시 제목18', '시 저자11', '시 내용']},
        {result:'A1C2A3A4', contents:['시 제목19', '시 저자11', '시 내용']},
        {result:'A1C2A3B4', contents:['시 제목20', '시 저자11', '시 내용']},
        {result:'A1C2A3C4', contents:['시 제목21', '시 저자11', '시 내용']},
        {result:'A1C2B3A4', contents:['시 제목22', '시 저자11', '시 내용']},
        {result:'A1C2B3B4', contents:['시 제목23', '시 저자11', '시 내용']},
        {result:'A1C2B3C4', contents:['시 제목24', '시 저자11', '시 내용']},
        {result:'A1C2C3A4', contents:['시 제목25', '시 저자11', '시 내용']},
        {result:'A1C2C3B4', contents:['시 제목26', '시 저자11', '시 내용']},
        {result:'A1C2C3C4', contents:['시 제목27', '시 저자11', '시 내용']},
        {result:'B1A2A3A4', contents:['시 제목1', '시 저자1', '시 내용']},
        {result:'B1A2A3B4', contents:['시 제목2', '시 저자2', '시 내용']},
        {result:'B1A2A3C4', contents:['시 제목3', '시 저자3', '시 내용']},
        {result:'B1A2B3A4', contents:['시 제목4', '시 저자4', '시 내용']},
        {result:'B1A2B3B4', contents:['시 제목5', '시 저자5', '시 내용']},
        {result:'B1A2B3C4', contents:['시 제목6', '시 저자6', '시 내용']},
        {result:'B1A2C3A4', contents:['시 제목7', '시 저자7', '시 내용']},
        {result:'B1A2C3B4', contents:['시 제목8', '시 저자8', '시 내용']},
        {result:'B1A2C3C4', contents:['시 제목9', '시 저자9', '시 내용']},
        {result:'B1B2A3A4', contents:['시 제목10', '시 저자10', '시 내용']},
        {result:'B1B2A3B4', contents:['시 제목11', '시 저자11', '시 내용']},
        {result:'B1B2A3C4', contents:['시 제목12', '시 저자12', '시 내용']},
        {result:'B1B2B3A4', contents:['시 제목13', '시 저자13', '시 내용']},
        {result:'B1B2B3B4', contents:['시 제목14', '시 저자11', '시 내용']},
        {result:'B1B2B3C4', contents:['시 제목15', '시 저자11', '시 내용']},
        {result:'B1B2C3A4', contents:['시 제목16', '시 저자11', '시 내용']},
        {result:'B1B2C3B4', contents:['시 제목17', '시 저자11', '시 내용']},
        {result:'B1B2C3C4', contents:['시 제목18', '시 저자11', '시 내용']},
        {result:'B1C2A3A4', contents:['시 제목19', '시 저자11', '시 내용']},
        {result:'B1C2A3B4', contents:['시 제목20', '시 저자11', '시 내용']},
        {result:'B1C2A3C4', contents:['시 제목21', '시 저자11', '시 내용']},
        {result:'B1C2B3A4', contents:['시 제목22', '시 저자11', '시 내용']},
        {result:'B1C2B3B4', contents:['시 제목23', '시 저자11', '시 내용']},
        {result:'B1C2B3C4', contents:['시 제목24', '시 저자11', '시 내용']},
        {result:'B1C2C3A4', contents:['시 제목25', '시 저자11', '시 내용']},
        {result:'B1C2C3B4', contents:['시 제목26', '시 저자11', '시 내용']},
        {result:'B1C2C3C4', contents:['시 제목27', '시 저자11', '시 내용']},
        {result:'C1A2A3A4', contents:['시 제목1', '시 저자1', '시 내용']},
        {result:'C1A2A3B4', contents:['시 제목2', '시 저자2', '시 내용']},
        {result:'C1A2A3C4', contents:['시 제목3', '시 저자3', '시 내용']},
        {result:'C1A2B3A4', contents:['시 제목4', '시 저자4', '시 내용']},
        {result:'C1A2B3B4', contents:['시 제목5', '시 저자5', '시 내용']},
        {result:'C1A2B3C4', contents:['시 제목6', '시 저자6', '시 내용']},
        {result:'C1A2C3A4', contents:['시 제목7', '시 저자7', '시 내용']},
        {result:'C1A2C3B4', contents:['시 제목8', '시 저자8', '시 내용']},
        {result:'C1A2C3C4', contents:['시 제목9', '시 저자9', '시 내용']},
        {result:'C1B2A3A4', contents:['시 제목10', '시 저자10', '시 내용']},
        {result:'C1B2A3B4', contents:['시 제목11', '시 저자11', '시 내용']},
        {result:'C1B2A3C4', contents:['시 제목12', '시 저자12', '시 내용']},
        {result:'C1B2B3A4', contents:['시 제목13', '시 저자13', '시 내용']},
        {result:'C1B2B3B4', contents:['시 제목14', '시 저자11', '시 내용']},
        {result:'C1B2B3C4', contents:['시 제목15', '시 저자11', '시 내용']},
        {result:'C1B2C3A4', contents:['시 제목16', '시 저자11', '시 내용']},
        {result:'C1B2C3B4', contents:['시 제목17', '시 저자11', '시 내용']},
        {result:'C1B2C3C4', contents:['시 제목18', '시 저자11', '시 내용']},
        {result:'C1C2A3A4', contents:['시 제목19', '시 저자11', '시 내용']},
        {result:'C1C2A3B4', contents:['시 제목20', '시 저자11', '시 내용']},
        {result:'C1C2A3C4', contents:['시 제목21', '시 저자11', '시 내용']},
        {result:'C1C2B3A4', contents:['시 제목22', '시 저자11', '시 내용']},
        {result:'C1C2B3B4', contents:['시 제목23', '시 저자11', '시 내용']},
        {result:'C1C2B3C4', contents:['시 제목24', '시 저자11', '시 내용']},
        {result:'C1C2C3A4', contents:['시 제목25', '시 저자11', '시 내용']},
        {result:'C1C2C3B4', contents:['시 제목26', '시 저자11', '시 내용']},
        {result:'C1C2C3C4', contents:['시 제목27', '시 저자11', '시 내용']},
      ]

      
      //if 절로 변경? 부등호로 연결하면 안되는데
      let AorB1 =
        poetList.find(data => data.name === 'A1').count === 1 ? 'A1' :
        poetList.find(data => data.name === 'B1').count === 1 ? 'B1' :
        poetList.find(data => data.name === 'C1').count === 1 ? 'C1' :
        '';
        
      let AorB2 = 
        poetList.find(data => data.name === 'A2').count === 1 ? 'A2' :
        poetList.find(data => data.name === 'B2').count === 1 ? 'B2' :
        poetList.find(data => data.name === 'C2').count === 1 ? 'C2' :
        '';
      
      let AorB3 = 
        poetList.find(data => data.name === 'A3').count === 1 ? 'A3' :
        poetList.find(data => data.name === 'B3').count === 1 ? 'B3' :
        poetList.find(data => data.name === 'C3').count === 1 ? 'C3' :
        '';

      let AorB4 = 
        poetList.find(data => data.name === 'A4').count === 1 ? 'A4' :
        poetList.find(data => data.name === 'B4').count === 1 ? 'B4' :
        poetList.find(data => data.name === 'C4').count === 1 ? 'C4' :
        '';

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
              <div>?</div>
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
                        <div> </div> <div>{qval}</div>
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
                <div className='poetLayout'>
                  <div className='poetTitle'>{resultContents.contents[0]}</div>
                  <div className='poetAuthor'>{resultContents.contents[1]}</div>
                  <div className='poetContents'>{resultContents.contents[2]}</div>
                </div>
                <div className='resultItemLayout'>
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