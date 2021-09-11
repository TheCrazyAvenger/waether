import { Dispatch } from 'redux';
import axios from 'axios';
import { TOGGLE_DRAWER, SEARCH_CITY } from './actionTypes';

export const toggleDrawerMenu = () => {
  return { type: TOGGLE_DRAWER };
};

export const searchCity = (value: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const responce = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=7fb17b0400480080f824b5827af64eca`
      );

      const data = responce.data;
      const name = data.name;
      const country = data.sys.country;
      const temp = data.main.temp;
      const icon = data.weather[0].icon;

      localStorage.setItem('cityName', name);

      dispatch({
        type: SEARCH_CITY,
        name,
        temp,
        country,
        icon,
      });
    } catch {
      console.log('Not found');
    }
  };
};
