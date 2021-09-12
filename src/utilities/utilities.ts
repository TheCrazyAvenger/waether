import { weekDay } from './constants';

export const updateWeek = () => {
  const currentDay: string[] = weekDay.slice(0, new Date().getDay() - 1);
  const currentWeek: string[] = [
    ...weekDay.slice(new Date().getDay() - 1),
    ...currentDay,
  ];

  return currentWeek;
};

export const getDarkMode = () => {
  let dark: string | boolean | null = localStorage.getItem('dark');
  if (dark === 'true') dark = true;
  if (dark === 'false') dark = false;
  return dark;
};
