import React from 'react';
import './WeekDay.scss';

type WeekDayProps = {
  day: string;
  number: number;
};

export const WeekDay: React.FC<WeekDayProps> = ({ day, number }) => {
  let logo = require('../../../images/cloudy.png');
  return (
    <div className='WeekDay'>
      <p>{`${number === 0 ? 'Сегодня' : number === 1 ? 'Завтра' : day}`}</p>
      <img className='logo' src={logo.default} alt='cloudy' />
    </div>
  );
};
