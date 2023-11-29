//recommend.js
import React, { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom'
import { MobileView } from 'react-device-detect';
import './recommend.css';

const questionList = [
  {q:[`오늘 드디어 열심히 준비하던 프로젝트가 끝나는 날입니다. 이번 프로젝트가 끝나면 당신에게 어떤 것이 기다리고 \n있을까요?`],
  a:[{type:'A1', text:`프로젝트가 끝나면 수고한 나만을 위한 선물을 사고 말 거에요.`},
    {type:'B1', text:`고생한 나를 위해 훌쩍 어디론가 떠나는 여행이 계획되어 있겠죠.`},
    {type:'C1', text:`함께 한 사람들과 함께 즐거운 먹부림 party가 \n기다리고 있을 것 같아요.`}
  ]},
  {q:[`당신의 가장 소중한 존재가\n 연락 하나 남기지 않고 사라졌습니다. \n어떻게 할 건가요?`],
  a:[{type:'A2', text:'가장 소중한 존재가 사라진 소식에 절망하며 울 거 같아요.'},
    {type:'B2', text:'내 인생에서 소중한 존재를 되찾기 위한 여정을  떠날 것 같아요.'},
    {type:'C2', text:'그 사람의 선택이겠죠? 저만의 새로운 시작을 할 것 같아요.'}
  ]},
  {q:[`산책 중에 길을 잃었습니다. \n당신의 앞에는 두 갈래 길이 있습니다. \n어디로 갈까요?`],
  a:[{type:'A3', text:`그래도 화살표 표지판이 있는 \n오른쪽 길로 가는 게 맞는 거 같아요.`},
    {type:'B3', text:'인생은 도박! 화살표 표지판이 없는 왼쪽 길로 갑니다!'},
    {type:'C3', text:'뒤를 돌아서 왔던 길로 가며 다른 길을 찾아볼게요.'}
  ]},
  {q:[`오랜만에 오는 한가한 주말입니다. \n특별한 약속도 없이 아침에 번쩍 눈이 떠집니다. \n당신은 무엇을 하나요?`],
  a:[{type:'A4', text:'어째서, 지금 이 시간에 눈을? 다시 자려고 이불을 뒤집어씁니다.'},
    {type:'B4', text:`이왕 일찍 일어난 거, 하루를 길게 살아볼까요? \n오늘 하루 계획을 세웁니다.`},
    {type:'C4', text:'문득 가고 싶었던 곳이 생각나요. 바로 옷을 챙겨 입어 나가요!'}
  ]},
  {q:[`테스트가 끝났습니다. \n나에게 어울리는 시가 궁금하신가요?`],
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
  const history = useNavigate();

  useEffect(() => {
    if (page === questionList.length + 1) {
      // 5초 후에 다음 페이지로 이동
      const timerId = setTimeout(() => {
        setPage(questionList.length + 2);
      }, 1500);// 1.5초
  
      // 컴포넌트가 언마운트되면 타이머 제거 (선택적으로)
      return () => {
        if (timerId) {
          clearTimeout(timerId);
        }
      };
    }
  }, [page, history]);

  const [resultContents, setResultContents] = useState({})

  const navigate = useNavigate();

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
        {result:'A1A2A3A4', loadmessage:'누군가를 사무치도록 그리워하는 당신에게 어울리는 시는', contents:['6시 32분', '박상미', `영원할 줄 알았던 6시 32분,\n공기의 냄새마저 선명하게 기억되는 순간`]},
        {result:'A1A2A3B4', loadmessage:'막막함 속 제자리걸음인 당신에게 어울리는 시는', contents:['누름돌과 뜨는해', '배재인', `나는 계속 제자리인 양 다른 땅을 짚는다\n자꾸 제 모습을 잃는 파도처럼`]},
        {result:'A1A2A3C4', loadmessage:'마음속 누군가를 바라보는 당신에게 어울리는 시는', contents: ['어떤 만남은 형체가 없을지라도', '이지호', `이젠 다 되었다면\n내게 한 마디만 해줄래?`]},
        {result:'A1A2B3A4', loadmessage:'한치의 앞도 보이지 않는 곳에서 선택을 앞둔 당신에게 어울리는 시는', contents:[' ', '한연지', `백지상태가 된다. 된 것 같다고 생각한다.`]},
        {result:'A1A2B3B4', loadmessage:'따스한 햇살 아래에서 여유를 만끽하는 당신에게 어울리는 시는', contents:[' ', '하유정', `정해지지 않아 다정한 파리의 다리 위에서`]},
        {result:'A1A2B3C4', loadmessage:'막막함 속 제자리걸음인 당신에게 어울리는 시는', contents:['누름돌과 뜨는해', '배재인', `나는 계속 제자리인 양 다른 땅을 짚는다\n자꾸 제 모습을 잃는 파도처럼`]},
        {result:'A1A2C3A4', loadmessage:'한치의 앞도 보이지 않는 곳에서 선택을 앞둔 당신에게 어울리는 시는', contents:[' ', '한연지', `백지상태가 된다. 된 것 같다고 생각한다.`]},
        {result:'A1A2C3B4', loadmessage:'반복되는 하루에 목표를 찾는 당신에게 어울리는 시는', contents:['술래잡기', '최은수', `무정한 파도는 내가 그러거나 말거나 그의 할 일을 한다`]},
        {result:'A1A2C3C4', loadmessage:'반복되는 하루에 목표를 찾는 당신에게 어울리는 시는', contents:['술래잡기', '최은수', `무정한 파도는 내가 그러거나 말거나 그의 할 일을 한다`]},
        {result:'A1B2A3A4', loadmessage:'누군가를 사무치도록 그리워하는 당신에게 어울리는 시는', contents:['6시 32분', '박상미', `영원할 줄 알았던 6시 32분,\n공기의 냄새마저 선명하게 기억되는 순간`]},
        {result:'A1B2A3B4', loadmessage:'미지와의 도전을 앞둔 당신에게 어울리는 시는', contents:['빛', '이정인', `심해로 탐사를 가자\n끝이 있는지 없는지,`]},
        {result:'A1B2A3C4', loadmessage:'자신이 누구인지 궁금한 당신에게 어울리는 시는', contents:['구름 속 비츤', '홍혜미', `영원히 찾을 수 없는 나의 조각들은 같은 공간을 떠돌고 있겠구나.`]},
        {result:'A1B2B3A4', loadmessage:'두려움 속에서 불타오르는 당신에게 어울리는 시는', contents:['스스로 빛나는 생명은', '이예담', `모두가 두려워할 어둠마저도\n떠오르는 해를 막을 수는 없을 테니까!`]},
        {result:'A1B2B3B4', loadmessage:'삭막한 사회 속에서 행동을 결심한 당신에게 어울리는 시는', contents:['증명', '권예진', `아직 살아있는 뜨거운 피를.\n전부 토해내어 보여줄 수 있다면.`]},
        {result:'A1B2B3C4', loadmessage:'두려움 속에서 불타오르는 당신에게 어울리는 시는', contents:['스스로 빛나는 생명은', '이예담', `모두가 두려워할 어둠마저도\n떠오르는 해를 막을 수는 없을 테니까!`]},
        {result:'A1B2C3A4', loadmessage:'누군가와 이별을 고민하는 당신에게 어울리는 시는', contents:['조우(遭遇)', '진민정', `그대, 되묻나니\n삶은 왜 져 버릴 것을 사랑하게 만드는지`]},
        {result:'A1B2C3B4', loadmessage:'먹먹한 안심과 위로가 필요한 당신에게 어울리는 시는', contents:['<주홍빛 약속>', '송헤준', `대신 나를 터트려 주홍 빛을 선물할게요\n먼길 너머 닿은 나의 진심이 위로가 되길`]},
        {result:'A1B2C3C4', loadmessage:'누군가와 이별을 고민하는 당신에게 어울리는 시는', contents:['조우(遭遇)', '진민정', `그대, 되묻나니\n삶은 왜 져 버릴 것을 사랑하게 만드는지`]},
        {result:'A1C2A3A4', loadmessage:'슬픔이 밀려오는 시간을 보내는 당신에게 어울리는 시는', contents:['도달', '김민서', `네 물결 하나 따위쯤은 흩어졌을지라도`]},
        {result:'A1C2A3B4', loadmessage:'자기 자신을 극복해야 하는 당신에게 어울리는 시는', contents:['조각난 __', '이지윤', `나를 사랑해요\n영원히요,`]},
        {result:'A1C2A3C4', loadmessage:'동경 어린 시선으로 꿈을 키우는 당신에게 어울리는 시는', contents:['달에 가 본 적이 있다고 했다', '이유리', '피워 보아도 알 수 없는 일들을 저만치 어루만지다']},
        {result:'A1C2B3A4', loadmessage:'답답한 삶 속 아등바등 살아가는 당신에게 어울리는 시는', contents:['사자의 편지', '김선우', `생의 흔적을 곱게 새기며\n보드랍고 질긴 숨을 쉬어보자꾸나`]},
        {result:'A1C2B3B4', loadmessage:'답답한 삶 속 아등바등 살아가는 당신에게 어울리는 시는', contents:['사자의 편지', '김선우', `생의 흔적을 곱게 새기며\n보드랍고 질긴 숨을 쉬어보자꾸나`]},
        {result:'A1C2B3C4', loadmessage:'답답한 삶 속 아등바등 살아가는 당신에게 어울리는 시는', contents:['사자의 편지', '김선우', `생의 흔적을 곱게 새기며\n보드랍고 질긴 숨을 쉬어보자꾸나`]},
        {result:'A1C2C3A4', loadmessage:'거친 파다 위 항해를 앞둔 당신에게 어울리는 시는', contents:['<來日>', '곽이진', `늙은 어둠에게 작별을 고하고.\n이제 막 눈을 뜬 빞을 마중할 준비를 하기 위해.`]},
        {result:'A1C2C3B4', loadmessage:'거친 파다 위 항해를 앞둔 당신에게 어울리는 시는', contents:['<來日>', '곽이진', `늙은 어둠에게 작별을 고하고.\n이제 막 눈을 뜬 빞을 마중할 준비를 하기 위해.`]},
        {result:'A1C2C3C4', loadmessage:'주변의 아름다움에 황홀함을 느끼는 당신에게 어울리는 시는', contents:['<사계>', '이은미', `고개 들어 꼿꼿이 보라 오늘의 하늘을 아는 한\n우리 두려워할 것 하나 없다`]},
        {result:'B1A2A3A4', loadmessage:'누군가를 사무치도록 그리워하는 당신에게 어울리는 시는', contents:['6시 32분', '박상미', `영원할 줄 알았던 6시 32분,\n공기의 냄새마저 선명하게 기억되는 순간`]},
        {result:'B1A2A3B4', loadmessage:'막막함 속 제자리걸음인 당신에게 어울리는 시는', contents:['누름돌과 뜨는해', '배재인', `나는 계속 제자리인 양 다른 땅을 짚는다\n자꾸 제 모습을 잃는 파도처럼`]},
        {result:'B1A2A3C4', loadmessage:'마음속 누군가를 바라보는 당신에게 어울리는 시는', contents:['어떤 만남은 형체가 없을지라도', '이지호', `이젠 다 되었다면\n내게 한 마디만 해줄래?`]},
        {result:'B1A2B3A4', loadmessage:'한치의 앞도 보이지 않는 곳에서 선택을 앞둔 당신에게 어울리는 시는', contents:[' ', '한연지', `백지상태가 된다. 된 것 같다고 생각한다.`]},
        {result:'B1A2B3B4', loadmessage:'막막함 속 제자리걸음인 당신에게 어울리는 시는', contents:['누름돌과 뜨는해', '배재인', `나는 계속 제자리인 양 다른 땅을 짚는다\n자꾸 제 모습을 잃는 파도처럼`]},
        {result:'B1A2B3C4', loadmessage:'따스한 햇살 아래에서 여유를 만끽하는 당신에게 어울리는 시는', contents:[' ', '하유정', `정해지지 않아 다정한 파리의 다리 위에서`]},
        {result:'B1A2C3A4', loadmessage:'반복되는 하루에 목표를 찾는 당신에게 어울리는 시는', contents:['술래잡기', '최은수', `무정한 파도는 내가 그러거나 말거나 그의 할 일을 한다`]},
        {result:'B1A2C3B4', loadmessage:'지친 하루의 끝, 편안함을 찾는 당신에게 어울리는 시는', contents:['물그늘', '박예나', `언젠가 발을 담그고 싶어\n세상이 한없이 밝아 바다에 그림자가 질 수 있다면`]},
        {result:'B1A2C3C4', loadmessage:'지친 하루의 끝, 편안함을 찾는 당신에게 어울리는 시는', contents:['물그늘', '박예나', `언젠가 발을 담그고 싶어\n세상이 한없이 밝아 바다에 그림자가 질 수 있다면`]},
        {result:'B1B2A3A4', loadmessage:'자신이 누구인지 궁금한 당신에게 어울리는 시는', contents:['구름 속 비츤', '홍혜미', `영원히 찾을 수 없는 나의 조각들은 같은 공간을 떠돌고 있겠구나.`]},
        {result:'B1B2A3B4', loadmessage:'자신이 누구인지 궁금한 당신에게 어울리는 시는', contents:['구름 속 비츤', '홍혜미', `영원히 찾을 수 없는 나의 조각들은 같은 공간을 떠돌고 있겠구나.`]},
        {result:'B1B2A3C4', loadmessage:'미지와의 도전을 앞둔 당신에게 어울리는 시는', contents:['빛', '이정인', `심해로 탐사를 가자\n끝이 있는지 없는지,`]},
        {result:'B1B2B3A4', loadmessage:'삭막한 사회 속에서 행동을 결심한 당신에게 어울리는 시는', contents:['증명', '권예진', `아직 살아있는 뜨거운 피를.\n전부 토해내어 보여줄 수 있다면.`]},
        {result:'B1B2B3B4', loadmessage:'삭막한 사회 속에서 행동을 결심한 당신에게 어울리는 시는', contents:['증명', '권예진', `아직 살아있는 뜨거운 피를.\n전부 토해내어 보여줄 수 있다면.`]},
        {result:'B1B2B3C4', loadmessage:'삭막한 사회 속에서 행동을 결심한 당신에게 어울리는 시는', contents:['증명', '권예진', `아직 살아있는 뜨거운 피를.\n전부 토해내어 보여줄 수 있다면.`]},
        {result:'B1B2C3A4', loadmessage:'누군가와 이별을 고민하는 당신에게 어울리는 시는', contents:['조우(遭遇)', '진민정', `그대, 되묻나니\n삶은 왜 져 버릴 것을 사랑하게 만드는지`]},
        {result:'B1B2C3B4', loadmessage:'먹먹한 안심과 위로가 필요한 당신에게 어울리는 시는', contents:['<주홍빛 약속>', '송헤준', `대신 나를 터트려 주홍 빛을 선물할게요\n먼길 너머 닿은 나의 진심이 위로가 되길`]},
        {result:'B1B2C3C4', loadmessage:'주변의 아름다움에 황홀함을 느끼는 당신에게 어울리는 시는', contents:['<사계>', '이은미', `고개 들어 꼿꼿이 보라 오늘의 하늘을 아는 한\n우리 두려워할 것 하나 없다`]},
        {result:'B1C2A3A4', loadmessage:'슬픔이 밀려오는 시간을 보내는 당신에게 어울리는 시는', contents:['도달', '김민서', `네 물결 하나 따위쯤은 흩어졌을지라도`]},
        {result:'B1C2A3B4', loadmessage:'자기 자신을 극복해야 하는 당신에게 어울리는 시는', contents:['조각난 __', '이지윤', `나를 사랑해요\n영원히요,`]},
        {result:'B1C2A3C4', loadmessage:'동경 어린 시선으로 꿈을 키우는 당신에게 어울리는 시는', contents:['달에 가 본 적이 있다고 했다', '이유리', '피워 보아도 알 수 없는 일들을 저만치 어루만지다']},
        {result:'B1C2B3A4', loadmessage:'자기 자신을 극복해야 하는 당신에게 어울리는 시는', contents:['조각난 __', '이지윤', `나를 사랑해요\n영원히요,`]},
        {result:'B1C2B3B4', loadmessage:'밤하늘 아래 길잡이가 필요한 당신에게 어울리는', contents:['황혼', '안현아', `광활하게 펼쳐진 밤에서\n다가온 세상을 맞이한다`]},
        {result:'B1C2B3C4', loadmessage:'밤하늘 아래 길잡이가 필요한 당신에게 어울리는', contents:['황혼', '안현아', `광활하게 펼쳐진 밤에서\n다가온 세상을 맞이한다`]},
        {result:'B1C2C3A4', loadmessage:'거친 파다 위 항해를 앞둔 당신에게 어울리는 시는', contents:['<來日>', '곽이진', `늙은 어둠에게 작별을 고하고.\n이제 막 눈을 뜬 빞을 마중할 준비를 하기 위해.`]},
        {result:'B1C2C3B4', loadmessage:'슬픔이 밀려오는 시간을 보내는 당신에게 어울리는 시는', contents:['도달', '김민서', `네 물결 하나 따위쯤은 흩어졌을지라도`]},
        {result:'B1C2C3C4', loadmessage:'주변의 아름다움에 황홀함을 느끼는 당신에게 어울리는 시는', contents:['<사계>', '이은미', `고개 들어 꼿꼿이 보라 오늘의 하늘을 아는 한\n우리 두려워할 것 하나 없다`]},
        {result:'C1A2A3A4', loadmessage:'누군가를 사무치도록 그리워하는 당신에게 어울리는 시는', contents:['6시 32분', '박상미', `영원할 줄 알았던 6시 32분,\n공기의 냄새마저 선명하게 기억되는 순간`]},
        {result:'C1A2A3B4', loadmessage:'마음속 누군가를 바라보는 당신에게 어울리는 시는', contents: ['어떤 만남은 형체가 없을지라도', '이지호', `이젠 다 되었다면\n내게 한 마디만 해줄래?`]},
        {result:'C1A2A3C4', loadmessage:'마음속 누군가를 바라보는 당신에게 어울리는 시는', contents: ['어떤 만남은 형체가 없을지라도', '이지호', `이젠 다 되었다면\n내게 한 마디만 해줄래?`]},
        {result:'C1A2B3A4', loadmessage:'한치의 앞도 보이지 않는 곳에서 선택을 앞둔 당신에게 어울리는 시는', contents:[' ', '한연지', `백지상태가 된다. 된 것 같다고 생각한다.`]},
        {result:'C1A2B3B4', loadmessage:'따스한 햇살 아래에서 여유를 만끽하는 당신에게 어울리는 시는', contents:[' ', '하유정', `정해지지 않아 다정한 파리의 다리 위에서`]},
        {result:'C1A2B3C4', loadmessage:'따스한 햇살 아래에서 여유를 만끽하는 당신에게 어울리는 시는', contents:[' ', '하유정', `정해지지 않아 다정한 파리의 다리 위에서`]},
        {result:'C1A2C3A4', loadmessage:'반복되는 하루에 목표를 찾는 당신에게 어울리는 시는', contents:['술래잡기', '최은수', `무정한 파도는 내가 그러거나 말거나 그의 할 일을 한다`]},
        {result:'C1A2C3B4', loadmessage:'지친 하루의 끝, 편안함을 찾는 당신에게 어울리는 시는', contents:['물그늘', '박예나', `언젠가 발을 담그고 싶어\n세상이 한없이 밝아 바다에 그림자가 질 수 있다면`]},
        {result:'C1A2C3C4', loadmessage:'지친 하루의 끝, 편안함을 찾는 당신에게 어울리는 시는', contents:['물그늘', '박예나', `언젠가 발을 담그고 싶어\n세상이 한없이 밝아 바다에 그림자가 질 수 있다면`]},
        {result:'C1B2A3A4', loadmessage:'자신이 누구인지 궁금한 당신에게 어울리는 시는', contents:['구름 속 비츤', '홍혜미', `영원히 찾을 수 없는 나의 조각들은 같은 공간을 떠돌고 있겠구나.`]},
        {result:'C1B2A3B4', loadmessage:'미지와의 도전을 앞둔 당신에게 어울리는 시는', contents:['빛', '이정인', `심해로 탐사를 가자\n끝이 있는지 없는지,`]},
        {result:'C1B2A3C4', loadmessage:'미지와의 도전을 앞둔 당신에게 어울리는 시는', contents:['빛', '이정인', `심해로 탐사를 가자\n끝이 있는지 없는지,`]},        
        {result:'C1B2B3A4', loadmessage:'두려움 속에서 불타오르는 당신에게 어울리는 시는', contents:['스스로 빛나는 생명은', '이예담', `모두가 두려워할 어둠마저도\n떠오르는 해를 막을 수는 없을 테니까!`]},
        {result:'C1B2B3B4', loadmessage:'삭막한 사회 속에서 행동을 결심한 당신에게 어울리는 시는', contents:['증명', '권예진', `아직 살아있는 뜨거운 피를.\n전부 토해내어 보여줄 수 있다면.`]},
        {result:'C1B2B3C4', loadmessage:'두려움 속에서 불타오르는 당신에게 어울리는 시는', contents:['스스로 빛나는 생명은', '이예담', `모두가 두려워할 어둠마저도\n떠오르는 해를 막을 수는 없을 테니까!`]},
        {result:'C1B2C3A4', loadmessage:'먹먹한 안심과 위로가 필요한 당신에게 어울리는 시는', contents:['<주홍빛 약속>', '송헤준', `대신 나를 터트려 주홍 빛을 선물할게요\n먼길 너머 닿은 나의 진심이 위로가 되길`]},
        {result:'C1B2C3B4', loadmessage:'먹먹한 안심과 위로가 필요한 당신에게 어울리는 시는', contents:['<주홍빛 약속>', '송헤준', `대신 나를 터트려 주홍 빛을 선물할게요\n먼길 너머 닿은 나의 진심이 위로가 되길`]},
        {result:'C1B2C3C4', loadmessage:'누군가와 이별을 고민하는 당신에게 어울리는 시는', contents:['조우(遭遇)', '진민정', `그대, 되묻나니\n삶은 왜 져 버릴 것을 사랑하게 만드는지`]},
        {result:'C1C2A3A4', loadmessage:'동경 어린 시선으로 꿈을 키우는 당신에게 어울리는 시는', contents:['달에 가 본 적이 있다고 했다', '이유리', '피워 보아도 알 수 없는 일들을 저만치 어루만지다']},
        {result:'C1C2A3B4', loadmessage:'자기 자신을 극복해야 하는 당신에게 어울리는 시는', contents:['조각난 __', '이지윤', `나를 사랑해요\n영원히요,`]},
        {result:'C1C2A3C4', loadmessage:'동경 어린 시선으로 꿈을 키우는 당신에게 어울리는 시는', contents:['달에 가 본 적이 있다고 했다', '이유리', '피워 보아도 알 수 없는 일들을 저만치 어루만지다']},
        {result:'C1C2B3A4', loadmessage:'답답한 삶 속 아등바등 살아가는 당신에게 어울리는 시는', contents:['사자의 편지', '김선우', `생의 흔적을 곱게 새기며\n보드랍고 질긴 숨을 쉬어보자꾸나`]},
        {result:'C1C2B3B4', loadmessage:'밤하늘 아래 길잡이가 필요한 당신에게 어울리는', contents:['황혼', '안현아', `광활하게 펼쳐진 밤에서\n다가온 세상을 맞이한다`]},
        {result:'C1C2B3C4', loadmessage:'밤하늘 아래 길잡이가 필요한 당신에게 어울리는', contents:['황혼', '안현아', `광활하게 펼쳐진 밤에서\n다가온 세상을 맞이한다`]},
        {result:'C1C2C3A4', loadmessage:'슬픔이 밀려오는 시간을 보내는 당신에게 어울리는 시는', contents:['도달', '김민서', `네 물결 하나 따위쯤은 흩어졌을지라도`]},
        {result:'C1C2C3B4', loadmessage:'거친 파다 위 항해를 앞둔 당신에게 어울리는 시는', contents:['<來日>', '곽이진', `늙은 어둠에게 작별을 고하고.\n이제 막 눈을 뜬 빞을 마중할 준비를 하기 위해.`]},
        {result:'C1C2C3C4', loadmessage:'주변의 아름다움에 황홀함을 느끼는 당신에게 어울리는 시는', contents:['<사계>', '이은미', `고개 들어 꼿꼿이 보라 오늘의 하늘을 아는 한\n우리 두려워할 것 하나 없다`]},
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
              {page < questionList.length && <div>{`${page} / ${questionList.length - 1}`}</div>}
            </div>
            <div style={{width: "90%", textAlign: "center", borderBottom: "1px solid #aaa",
                  lineHeight: "0.1em", margin:"20px"}}>    </div>
            
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
          :page===questionList.length+1?
          <div className='loadingLayout'>
            <div className='loadContent'>
              <div>!</div>
              <div>{resultContents.loadmessage}</div>
            </div>
          </div>
          :
          <div>
            <div className="resultLayout">
              <div className='resultTitle'>
                <div>시 추천 테스트</div>
              </div>
              <div style={{width: "90%", textAlign: "center", borderBottom: "1px solid #aaa",
                  lineHeight: "0.1em", margin:"20px"}}>    </div>
          
              <div className='resultList' style={{display: 'flex'}}>
                <div className='poetLayout'>
                  <div className='poetTitle'>{resultContents.contents[0]}</div>
                  <div className='poetAuthor'>{resultContents.contents[1]}</div>
                  <div className='poetContents'>{resultContents.contents[2]}</div>
                </div>
              </div>
              <div>
                <div className='goToInfo' onClick={()=>{navigate("/Info")}}>전체 시가 궁금하시다면 클릭</div>
                <div className='retryBtn' onClick={()=>window.location.reload()}>다시 하기</div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }