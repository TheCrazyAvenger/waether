import axios from 'axios';
import { Dispatch } from 'redux';
import { FETCH_WEATHER_SUCCESS, SET_CITIES } from './actionTypes';
import { getData } from '@utilities/utilities';

const CITY = 'Minsk';
const UNITS = 'metric';

export const fetchWeather = (cityName?: string, units?: string) => {
  const unitsURL = getData(units || null, 'unitsType', UNITS);
  const cityURL = getData(cityName || null, 'cityName', CITY);
  console.log(unitsURL);

  return async (dispatch: Dispatch) => {
    try {
      const responce = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityURL}&units=${unitsURL}&appid=7fb17b0400480080f824b5827af64eca`
      );

      const cityInfo = responce.data.city;
      const list = responce.data.list;
      const currentWeather = list[0];
      const currentTemp = currentWeather.main;
      const wind = currentWeather.wind;
      const weatherInfo = currentWeather.weather[0];

      const weekWeather = getWeather(list, 12);
      const nightWeather = getWeather(list, 3);

      const { country, name, sunrise, sunset } = cityInfo;
      const { temp, feels_like, humidity, pressure } = currentTemp;
      const { speed } = wind;
      const { description, icon } = weatherInfo;

      const units = unitsURL;

      localStorage.setItem('cityName', name);

      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        country,
        name,
        sunrise,
        sunset,
        temp,
        feels_like,
        humidity,
        pressure,
        wind: speed,
        description,
        icon,
        weekWeather,
        nightWeather,
        units,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const setCitys = (city?: string | null, deleteCity: string = '') => {
  const citiesList = localStorage.getItem('cities');

  let tempArr: Array<string>;
  if (citiesList) {
    tempArr = JSON.parse(citiesList);
  } else {
    tempArr = [];
  }
  if (city) {
    tempArr.push(city);
  }

  const cities = tempArr.filter(
    (v, i, a) => a.indexOf(v) === i && v.split(', ')[0] !== deleteCity
  );
  localStorage.setItem('cities', JSON.stringify(cities));

  return {
    type: SET_CITIES,
    cities,
  };
};

const getWeather = (list: Array<any>, time: number) => {
  const newList: Array<object> = [];
  const days = list;

  // eslint-disable-next-line
  days.map((item) => {
    const date = new Date(item['dt_txt']);
    const hour = date.getHours();
    if (hour === time) newList.push(item);
  });

  return newList;
};
