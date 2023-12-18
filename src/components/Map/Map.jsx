import React, { useEffect, useRef } from 'react';

const Map = () => {
  // map 인스턴스를 저장할 ref를 생성합니다.
  const mapRef = useRef(null);

  useEffect(() => {
    // 지도를 담을 DOM 요소를 가져옵니다.
    const mapDiv = document.getElementById('map_div');
 
    // mapRef.current가 null이면 새 Tmapv2.Map 인스턴스를 생성합니다.
    if (!mapRef.current && mapDiv) {
      mapRef.current = new window.Tmapv2.Map("map_div", {
        center: new window.Tmapv2.LatLng(37.566481622437934,126.98502302169841),
        width: "100vh",
        height: "40vh",
        zoom: 15
      });
    }
  }, []);

  return(
    <div id='map_div' className='map__container'></div>
  ) 
};

export default Map;