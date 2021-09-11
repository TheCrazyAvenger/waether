import axios from 'axios';
import { Dispatch } from 'redux';
import { FETCH_WEATHER_SUCCESS } from './actionTypes';

export const fetchWeather = (cityName: string = 'Minsk') => {
  return async (dispatch: Dispatch) => {
    try {
      const responce = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=7fb17b0400480080f824b5827af64eca`
      );

      const cityInfo = responce.data.city;
      const list = responce.data.list;
      const currentWeather = list[0];
      const currentTemp = currentWeather.main;
      const wind = currentWeather.wind;
      const weatherInfo = currentWeather.weather[0];

      const weekWeather = getWeather(list);

      const { country, name, sunrise, sunset } = cityInfo;
      const { temp, humidity, pressure } = currentTemp;
      const { speed } = wind;
      const { description, icon } = weatherInfo;

      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        country,
        name,
        sunrise,
        sunset,
        temp,
        humidity,
        pressure,
        wind: speed,
        description,
        icon,
        weekWeather,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

const getWeather = (list: Array<any>) => {
  const newList: Array<object> = [];
  const days = list;

  days.map((item) => {
    const date = new Date(item['dt_txt']);
    const hour = date.getHours();
    if (hour === 15) newList.push(item);
  });

  return newList;
};
