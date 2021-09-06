import React from 'react';
import { WeatherNow } from '../../components/WeatherNow/WeatherNow';
import { WeatherWeek } from '../../components/WeatherWeek/WeatherWeek';

const Weather: React.FunctionComponent = () => {
  return (
    <>
      <WeatherNow />
      <WeatherWeek />
    </>
  );
};

export default Weather;
