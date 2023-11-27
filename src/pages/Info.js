import './Info.css';

const Info = () => {
    return (
        <div className='InfoExhi'>
            <div>
                <br/>
                <br/>
                
            </div>
            <div className='InfoTitle'>
                <p>전시 안내</p>
                <img className='info-title-circle' src={process.env.PUBLIC_URL + '/assets/InfoCircle.png'}/>
            </div>
            
            <br/>
            <img src={process.env.PUBLIC_URL + '/assets/FinalPoster.png'} className='Poster'/>
            <div className='InfoDetail'>
                <p>전시내용</p>
            </div>
            <br/>
            <br/>
            

        </div>
    );
};

export default Info;