import React from 'react';
import './LastExhi.css';

const LastExhi =() => {


    return (
        <div className='LastExhiBody'>
            <div className='LastExhiTitle'>
                <p>지난 전시</p>
                <img alt="circle" className='ExhiTitleCircle' src={process.env.PUBLIC_URL + '/assets/infomapCircle.png'}/>
            </div>
            <div className='LastExhiTitle2'>
                <p>어둠이 걷히고 나면</p>
            </div>
            
            <div className='LastExhiTitleDetail'>
                <p>-2023 전시회 소개</p>
                <p>2023년 운빛 프로젝트, 어둠이 걷히고 나면</p>
                <p>순수문학동아리 '운지문학회'와 사진동아리 '한빛'이 만나, 새로운 이야기를 그린 전시회이다.</p>
                <br/>
                <p>'어둠이 걷히고 나면' 이라는 주제로, 40인의 작가들이 저마다의 어둠을, 그 어둠을 벗어나 향하는 방향성과 빛을 향한 마음을 녹여낸 작품들을 전시하였다.</p>
                <p>2023년 1월 18일부터 19일까지 양일 간 안국역 근처 전시장에서 전시와 굿즈 판매를 진행하였다.</p>
                
                <br/>
                
            </div>
            <div className='PosterContent'>
            
                <img alt="poster" className="FinalPosterImg" src={process.env.PUBLIC_URL + '/assets/FinalPoster.png'}/>

            </div>
            <div className='LastExhiContent'>
                <img alt="poster" className='LastExhiPosterImg' src={process.env.PUBLIC_URL + '/assets/LastPoster.png'}/>
            </div>
            <div className='LastExhiPosterDetail'>
                    
                    
            </div>
            <div>
                <br/>
                <br/>
            </div>
            
        </div>
    );
};

export default LastExhi; 