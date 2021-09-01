import React, { useEffect, useState } from 'react';
import './WeatherWeek.scss';
import { WeekDay } from './WeekDay/WeekDay';

export const WeatherWeek: React.FC = () => {
  const [week, setWeek] = useState([
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ]);

  useEffect(() => {
    const weekCopy: string[] = week;

    const currentDay: string[] = weekCopy.slice(0, new Date().getDay() - 1);
    const currentWeek: string[] = [
      ...weekCopy.slice(new Date().getDay() - 1),
      ...currentDay,
    ];

    setWeek(currentWeek);
  }, []);

  return (
    <div className='WeatherWeek'>
      {week.map((day, i) => (
        <WeekDay day={day} key={i} number={i} />
      ))}
    </div>
  );
};
