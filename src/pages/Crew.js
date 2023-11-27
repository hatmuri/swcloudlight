import React, { useState } from 'react';
import './Crew.css';

const Crew =() => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className='first'>
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="flip-card-inner">
        <div className="flip-card-front">
            <img src={process.env.PUBLIC_URL + '/assets/CrewInfo2.png'} alt="Front" />
        </div>
        <div className="flip-card-back">
            <img src={process.env.PUBLIC_URL + '/assets/crewCard.png'} alt="Back" />
        </div>
        </div>
    </div>
        </div>
        
        );

};

export default Crew;