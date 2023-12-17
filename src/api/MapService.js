import axios from 'axios';

const tmapApiInstance = axios.create({
  baseURL: process.env.REACT_APP_TMAP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'appKey': process.env.REACT_APP_TMAP_API_KEY
  }
});

export const getMapData = async (parameters) => {
  const response = await tmapApiInstance.get('/pois', { params: parameters });
  if (response.status !== 200) {
    throw new Error("Tmap API request failed");
  }
  return response.data.features; 
}