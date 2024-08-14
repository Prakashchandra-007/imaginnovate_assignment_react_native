import axios from 'axios';

const API_KEY = '1635890035cbba097fd5c26c8ea672a1';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeatherData = async city => {
  console.log(API_KEY);
  try {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
