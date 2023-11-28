import React, { useEffect } from 'react';
import anime from 'animejs'; // animejs도 import 해야 합니다.

const StartLoading = () => {
    useEffect(() => {
    // 컴포넌트가 마운트되면 애니메이션 실행
    anime({
        targets: ".line_drawing .lines path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 3000,
        direction: "alternate",
        loop: false,
    });
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

    return (
    <div className='start'>
        <div className="line_drawing">
        <svg width="105" height="73" viewBox="0 0 105 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="_레이어_1-2">
            <g className="lines gradient-text">
                <path
                className="cls-1 gr-1"
                d="M62.9611 12.3855C62.9611 12.3855 56.0053 22.3957 50.7957 36.4963C46.8746 47.106 42.1755 57.2711 35.8608 61.5118C29.4554 65.8132 20.3645 68.0761 12.319 63.42C2.84131 57.9334 6.02412 41.5699 23.3881 36.5951C23.3881 36.5951 11.8858 33.3444 8.3405 25.267C5.27041 18.2785 7.40113 10.7153 15.4841 8.12009C25.8194 4.79755 35.6861 9.11684 41.6495 17.7689C49.8298 29.638 53.9254 48.9738 61.9598 58.4609C67.9165 65.4921 78.8199 67.8718 86.5028 64.226C95.775 59.8281 99.4595 43.8081 97.4813 29.2406H75.8669"
                stroke="#FEAFA8" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"
                />
            </g>
            </g>
        </svg>
        </div>
    </div>
    );
};

export default StartLoading;