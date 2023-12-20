import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapDiv = document.getElementById('map_div');
    if (!mapRef.current && mapDiv) {
      const map = new window.Tmapv2.Map('map_div', {
        center: new window.Tmapv2.LatLng(37.566481622437934, 126.98502302169841),
        zoom: 15,
      });
      mapRef.current = map;

      // Geolocation API를 사용하여 현재 위치를 가져옵니다.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // 현재 위치 좌표
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const center = new window.Tmapv2.LatLng(lat, lng);

            // 지도의 중심을 현재 위치로 설정합니다.
            map.setCenter(center);

            // 현재 위치를 중심으로 원을 그립니다.
            const circle = new window.Tmapv2.Circle({
              center: center,  // 원의 중심 좌표
              radius: 150,     // 원의 반경(미터 단위)
              strokeColor: '#E7A8CF',  // 원의 선 색상
              strokeWeight: 3, // 원의 선 두께
              strokeOpacity: 0.8, // 원의 선 투명도
              fillColor: '#C4C4C5', // 원의 채우기 색상
              fillOpacity: 0.5, // 원의 채우기 투명도
              map: map  // 원을 그릴 지도 객체
            });
          },
          (error) => {
            console.error('Geolocation error:', error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
        );
      } else {
        alert('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
      }
    }
  }, []);

  return (
    <div className='map__container'>
      <div className='map__inner'>
        <div id='map_div'></div>
      </div>
    </div>
  );
};

export default Map;
