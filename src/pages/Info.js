import './Info.css';

const Info = () => {
    return (
        <div className='InfoExhi'>
            <div className='InfoTitle'>
                <div>전시 안내</div>
                <img src={process.env.PUBLIC_URL + '/assets/InfoCircle.png'}/>
            </div>
            
            <br/>
            <img src={process.env.PUBLIC_URL + '/assets/poster.png'} className='Poster'/>
            <div style={{width: '100%', height: '100%', color: 'black', fontSize: 12, fontFamily: 'KoPubWorldBatang_Pro', fontWeight: '400', wordWrap: 'break-word'}}>전시정보</div>
            <br/>
            <br/>
            

        </div>
    );
};

export default Info;