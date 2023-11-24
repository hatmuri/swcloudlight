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
                <p>상세설명 상세설명 상세설명 상세설명 상세설명 상세설명</p>
            </div>
            <div className='PosterContent'>
                <img className="FinalPoster" src={process.env.PUBLIC_URL + '/assets/FinalPoster.png'}/>

                <img className='LastExhiPoster' src={process.env.PUBLIC_URL + '/assets/LastPoster.png'}/>
                
            </div>
            <div className='LastExhiPosterDetail'>
                    <p>상세설명 상세설명 상세설명 상세설명 상세설명 상세설명</p>
                    
            </div>
            <div>
                <br/>
                <br/>
            </div>
            
        </div>
    );
};

export default LastExhi; 