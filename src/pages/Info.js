import './Info.css';

const Info = () => {
    return (
        <div className='InfoExhi'>
            <div className='InfoTitle'>
                <p>전시 안내</p>
                <img className='info-title-circle' src={process.env.PUBLIC_URL + '/assets/InfoCircle.png'}/>
            </div>
            
            <br/>
            <img src={process.env.PUBLIC_URL + '/assets/thisposter1.png'} className='Poster'/>
            <div className='InfoDate'>
                <p className='InfoDate2'> 2024.1.12-14 </p>
            </div>
            <div className='InfoDetail'>
                <br/>
                <p>다채로운 색채는 알게 모르게 우리의 마음 속에 있다.</p>
                <p>그 색채를 인식함과 동시에 우리의 일상은 따뜻함과 추움, 즐거움과 괴로움, 다양함으로 물든다.</p>
                <p>간혹 어두움마저 우리에게 따스한 색으로 다가올 때, 우리는 비로소 세상의 빛이 만들어낸 풍경을 올곧이 바라본다.</p>
                <p>덕성여자대학교 정동아리 '운지문학회'와 '한빛'의 작가 총 40명이 모여 시와 사진으로 저마다의 색채로 빛을 일으켰다.</p>
                
            </div>
            <br/>
            <br/>
            <div className='InfoBlank'>

            </div>
            

        </div>
    );
};

export default Info;