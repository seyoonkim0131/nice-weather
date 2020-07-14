import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '612a7d44036e1adc008a3b07ad8cf7fc';

export default function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ lat, setLat ] = useState(0);
  const [ lon, setLon ] = useState(0);
  const [ errorMsg, setErrorMsg ] = useState(null);
  const [ temp, setTemp ] = useState(0);
  const [ condition, setCondition ] = useState('Thunderstorm');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if(status !== 'granted') {
        setErrorMsg('Permission to access location was denid');
      }
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
      setIsLoading(false);
      setLat(latitude);
      setLon(longitude);
      const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
      setTemp(data.main.temp);
      setCondition(data.weather[0].main);
    })();
  });
  if(errorMsg) {
    
  }

  return isLoading ? <Loading/> : <Weather temp={temp} condition={condition}/>;
}