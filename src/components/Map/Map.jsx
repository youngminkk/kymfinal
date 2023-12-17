import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const mapDiv = document.getElementById('map_div');

    if (mapDiv && !mapDiv.firstChild) {
      new window.Tmapv2.Map("map_div", {
        center: new window.Tmapv2.LatLng(37.566481622437934,126.98502302169841),
        width: "890px",
        height: "400px",
        zoom: 15
      });
    }
  }, []);

  return <div id='map_div' className='map__container'/>;
};

export default Map;