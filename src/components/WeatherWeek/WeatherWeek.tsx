import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { WeekDay } from './WeekDay/WeekDay';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: '20px',
    textAlign: 'center',
  },
  button: {
    display: 'block',
    width: '100%',
  },
  weatherMap: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0',
  },
  map: {
    width: '95%',
    height: '300px',
    marginTop: 20,
  },
  logo: {
    width: 165,
    height: 75,
  },
  openWeather: {
    borderTop: 'rgb(170, 161, 161) 1px solid',
    padding: '5px 0',
  },
  logoButton: {
    width: '100%',
  },
});

export const WeatherWeek: React.FunctionComponent = () => {
  const [week, setWeek] = useState([
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ]);

  const monthDay = new Date().getDate();

  const weatherMapImg = require('../../images/weather map.jfif');
  const openWeatherLogo = require('../../images/OpenWeather-Logo-Light.jpg');

  const classes = useStyles();

  useEffect(() => {
    const currentDay: string[] = week.slice(0, new Date().getDay() - 1);
    const currentWeek: string[] = [
      ...week.slice(new Date().getDay() - 1),
      ...currentDay,
    ];

    setWeek(currentWeek);
  }, []);

  return (
    <Grid container direction='column' className={classes.root}>
      {week.map((day, i) => {
        return (
          <Grid item key={i}>
            <Button className={classes.button}>
              <WeekDay monthDay={monthDay + i} day={day} number={i} />
            </Button>
          </Grid>
        );
      })}
      <Grid item className={classes.weatherMap}>
        <Typography variant='h5'>Посмотреть погоду на карте</Typography>
        <img
          className={classes.map}
          src={weatherMapImg.default}
          alt='weather map'
        />
      </Grid>
      <Grid item className={classes.openWeather}>
        <Button
          className={classes.logoButton}
          onClick={() => window.open('https://openweathermap.org/', '_blank')}
        >
          <img
            className={classes.logo}
            src={openWeatherLogo.default}
            alt='open weather logo'
          />
        </Button>
      </Grid>
    </Grid>
  );
};
