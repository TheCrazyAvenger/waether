import { WeatherState, WeatherAction } from '../types/weather';
import { FETCH_WEATHER_SUCCESS } from '../actionCreator/actionTypes';

const initialState: WeatherState = {
  name: null,
  country: null,
  units: null,
  sunrise: null,
  sunset: null,
  humidity: 0,
  pressure: 0,
  temp: 0,
  feels_like: 0,
  wind: 0,
  description: null,
  icon: null,
  weekWeather: null,
  nightWeather: null,
};

export const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS: {
      return {
        ...state,
        name: action.name,
        units: action.units,
        country: action.country,
        sunrise: action.sunrise,
        sunset: action.sunset,
        humidity: action.humidity,
        pressure: action.pressure,
        temp: action.temp,
        feels_like: action.feels_like,
        wind: action.wind,
        description: action.description,
        icon: action.icon,
        weekWeather: action.weekWeather,
        nightWeather: action.nightWeather,
      };
    }
    default:
      return state;
  }
};
