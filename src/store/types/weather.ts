import { FETCH_WEATHER_SUCCESS } from '../actionCreator/actionTypes';

export interface WeatherState {
  name: string | null;
  units: string | null;
  country: string | null;
  sunrise: string | null;
  sunset: string | null;
  humidity: number;
  pressure: number;
  temp: number;
  feels_like: number;
  wind: number;
  description: string | null;
  icon: string | null;
  weekWeather: Array<object> | null;
  nightWeather: Array<object> | null;
}

interface WeatherFetchSuccess {
  type: typeof FETCH_WEATHER_SUCCESS;
  name: string;
  units: string;
  country: string;
  sunrise: string;
  sunset: string;
  humidity: number;
  pressure: number;
  temp: number;
  feels_like: number;
  wind: number;
  description: string;
  icon: string;
  weekWeather: Array<object>;
  nightWeather: Array<object>;
}

export type WeatherAction = WeatherFetchSuccess;
