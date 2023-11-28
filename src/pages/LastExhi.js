import React, { useEffect, useState } from 'react';
import './LastExhi.css';

const LastExhi =() => {


    return (
        <div className='LastExhiBody'>
            <div className='LastExhiTitle'>
                <p>지난 전시</p>
                <img className='ExhiTitleCircle' src={process.env.PUBLIC_URL + '/assets/infomapCircle.png'}/>
            </div>
            <div className='LastExhiTitle2'>
                <p>어둠이 걷히고 나면</p>
            </div>
            <div className='LastExhiTitleDetail'>
                <p>어둠은 두려움인 동시에 안식으로서 우리 곁을 지킨다.</p>
                <p>그러나 예상치 못한 곳에서 소리없이 마주하는 어둠은 종종 우리를 당황케 하는 존재로 다가온다.</p>
                <p>전염병은 멈춘 세상에 짙은 그림자를 드리웠고, 전쟁은 누군가가 당연히 누려야 할 행복의 자유를 무참히 도륙했다.</p>
                <br/>
                <p>지난 몇 년 동안, 우리는 각자 성인이 되어 20대의 출발선에섰다.</p>
                <p>걱정과 기대를 안고 어른이 되기 위해 맞이한 새로운 시작은 낯설고 어려웠다.</p>
                <p>그 누구도 경험하지 못했던 만큼, 단절된 대학과 사회는 우리를 더 깊은 어둠으로 내몰았다.</p>
                <br/>
                <p>저마다의 어둠에서 헤매고 있지만 빛을 향하는 마음만은 같다. 그렇다면 우리는 어둠 속에서 무엇을 바라며, 어디로 나아가고 있는 걸까?</p>
                <p>덕성여자대학교 정동아리 '운지문학회'와 '한빛'의 작가 총 40명이 모여 시와 사진으로 저마다의 '어둠이 걷힌' 후를 담았다.</p>
                <br/>
            </div>
            <div className='PosterContent'>
            
                <img className="FinalPosterImg" src={process.env.PUBLIC_URL + '/assets/FinalPoster.png'}/>

            </div>
            <div className='LastExhiContent'>
                <img className='LastExhiPosterImg' src={process.env.PUBLIC_URL + '/assets/LastPoster.png'}/>
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