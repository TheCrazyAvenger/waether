import { WeatherState, WeatherAction } from '../types/weather';
import { FETCH_WEATHER_SUCCESS } from '../actionCreator/actionTypes';

const initialState: WeatherState = {
  name: null,
  country: null,
  sunrise: null,
  sunset: null,
  humidity: 0,
  pressure: 0,
  temp: 0,
  wind: 0,
  description: null,
  icon: null,
  weekWeather: null,
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
        country: action.country,
        sunrise: action.sunrise,
        sunset: action.sunset,
        humidity: action.humidity,
        pressure: action.pressure,
        temp: action.temp,
        wind: action.wind,
        description: action.description,
        icon: action.icon,
        weekWeather: action.weekWeather,
      };
    }
    default:
      return state;
  }
};
