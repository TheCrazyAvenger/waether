import {
  FETCH_WEATHER_SUCCESS,
  SET_CITIES,
} from '../actionCreator/actionTypes';

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
  cities: Array<string> | [];
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

interface SetCities {
  type: typeof SET_CITIES;
  cities: Array<string> | [];
}

export type WeatherAction = WeatherFetchSuccess | SetCities;
