import './Place.css';

const Place=() => {

    return (
        
        <div className='InfoMap'>
            <div className='map-header'>
                <p>오시는 길</p>
                <img className='info-map-circle' src={process.env.PUBLIC_URL + '/assets/infomapCircle.png'}/>
            </div>    

            <div className='info-container'>
                <img className='map-img' src={process.env.PUBLIC_URL + '/assets/map2.png'} alt="Map" />
                <div className='address-txt'>
                    <br/>
                    <br/>
                    <p>갤러리 강호</p>
                    <p className='detailAddress'>서울 종로구 삼일대로 32길 22-1 2층</p>
                </div>
            </div>
        </div>
    );
};

export default Place;