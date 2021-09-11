import { FETCH_WEATHER_SUCCESS } from '../actionCreator/actionTypes';

export interface WeatherState {
  name: string | null;
  country: string | null;
  sunrise: string | null;
  sunset: string | null;
  humidity: number;
  pressure: number;
  temp: number;
  wind: number;
  description: string | null;
  icon: string | null;
  weekWeather: Array<object> | null;
}

interface WeatherFetchSuccess {
  type: typeof FETCH_WEATHER_SUCCESS;
  name: string;
  country: string;
  sunrise: string | null;
  sunset: string | null;
  humidity: number;
  pressure: number;
  temp: number;
  wind: number;
  description: string | null;
  icon: string | null;
  weekWeather: Array<object> | null;
}

export type WeatherAction = WeatherFetchSuccess;
