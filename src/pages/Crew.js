import React, { useState } from 'react';
import './Crew.css';

const Crew =() => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flip-card-container">
            <div className='crewtext'>
                <p className='crewtextU'>운지 문학회 </p>
                <p className='crewtextC'>,</p>
                <p className='crewtextH'>한빛 소개</p>
            </div>
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={process.env.PUBLIC_URL + '/assets/unji1.png'} alt="Front" />
                    </div>
                    <div className="flip-card-back">
                        <img src={process.env.PUBLIC_URL + '/assets/hanbit1.png'} alt="Back" />
                    </div>
                </div>
            </div>
        </div>
        );
};

export default Crew;