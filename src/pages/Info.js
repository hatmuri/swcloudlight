import './Info.css';

const Info = () => {
    return (
        <div className='InfoExhi'>
            <div className='InfoTitle'>
                <p className='titletxt'>전시 안내</p>
                <img className='info-title-circle' src={process.env.PUBLIC_URL + '/assets/InfoCircle.png'}/>
            </div>
            
            <br/>
            <img alt="poster" src={process.env.PUBLIC_URL + '/assets/thisposter1.png'} className='Poster'/>
            <div className='InfoDate'>
                <p className='InfoDate2'> 2024.1.11-13 </p>
            </div>
            <div className='InfoDetail'>
                <br/>
                <p>2024 순수문학동아리 운지문학회x사진 동아리 한빛 <br/>운빛 프로젝트 &lt; 색채, 빛을 일으키다 &gt; </p>
                <p>지나가는 어둠 속에 있던 색은 무엇이고, 어둠이 지나간 빛 아래 놓인 색은 무엇일까?</p>
                <p>자유로이 풀려난 색채들이 비추어내는 빛은 어떨지, 40인의 작가들이 치열하게 고민했다.</p>
                
                
            </div>
            <br/>
            <br/>
            <div className='InfoBlank'>

            </div>
            

        </div>
    );
};

export default Info;