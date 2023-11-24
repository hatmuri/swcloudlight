import './Place.css';

const Place=() => {

    return (
        
        <div className='InfoMap'>
            <div className='map-header'>
                <p>오시는 길</p>
                <img className='info-map-circle' src={process.env.PUBLIC_URL + '/assets/infomapCircle.png'}/>
            </div>    

            <div className='info-container'>
                <img className='map-img' src={process.env.PUBLIC_URL + '/assets/map.png'} alt="Map" />
                <div className='address-txt'>
                    <br/>
                    <br/>
                    <p>오스카 라운지</p>
                    <p className='detailAddress'>서울특별시 도봉구 삼양로 144길</p>
                </div>
            </div>
        </div>
    );
};

export default Place;