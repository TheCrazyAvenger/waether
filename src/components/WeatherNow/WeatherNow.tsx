import React from 'react';
import { Details } from './Details/Details';
import './WeatherNow.scss';

export const WeatherNow: React.FC = () => {
  let logo = require('../../images/cloudy.png');
  return (
    <div className='WeatherNow'>
      <div className='weather-condition'>
        <img className='climate' src={logo.default} alt='cloudy' />
        <h2>15°</h2>
      </div>
      <p>Cloudy</p>

      <Details />
    </div>
  );
};
