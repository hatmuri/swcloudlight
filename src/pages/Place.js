const Place=() => {

    return (
        <div>
        <p className='InfoMap'>오시는 길</p>
        <img src={process.env.PUBLIC_URL + '/assets/map.png'} />
        <p>
            덕성여대 오스카 라운지
        </p>
        <p>
            서울특별시 도봉구 삼양로 144길
        </p>
        </div>

    );

};

export default Place;