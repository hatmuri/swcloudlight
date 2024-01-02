import './Place.css';
import { useEffect, useRef } from 'react';



const Place=() => {
    const mapElement = useRef(null);
    const { naver } = window;
  
    useEffect(() => {
      if (!mapElement.current || !naver) return;
  
      // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
      const location = new naver.maps.LatLng(37.5752737, 126.9883030);
      const mapOptions = {
        center: location,
        zoom: 17,
        zoomControl: true,
      };
  
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      new naver.maps.Marker({
        position: location,
        map,
      });
    }, []);

    return (
        
        <div className='InfoMap'>
            <div className='map-header'>
                <p>오시는 길</p>
                <div className='map-api'>
                    <div ref={mapElement} style={{ width: "300px", height:"300px" }} />
                    <code id="snippet" class="snippet"></code>  
                </div>    
            </div>    

            <div className='info-container'>            
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