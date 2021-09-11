import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { weekDay } from '../../utilities/constants';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { WeekDay } from './WeekDay/WeekDay';
import { Button, Typography } from '@material-ui/core';
import { updateWeek } from '../../utilities/utilities';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import openWeatherLogo from '../../images/OpenWeather-Logo-Light.jpg';

type WeatherWeekProps = {
  sunrise: string | null;
  sunset: string | null;
  weekWeather: Array<object> | null;
};

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: '20px',
    textAlign: 'center',
  },
  title: {
    color: 'black',
  },
  weatherMap: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0',
  },
  dayCicle: {
    padding: '10px 80px',
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 50,
  },
  arrow: {
    width: '100%',
  },
  openWeather: {
    borderTop: 'rgb(170, 161, 161) 1px solid',
    padding: '5px 0',
  },
  logoButton: {
    width: '100%',
  },
  error: {
    color: 'black',
    paddingBottom: 15,
    borderBottom: 'rgb(170, 161, 161) 1px solid',
  },
  day: {
    fontSize: 18,
  },
});

export const WeatherWeek: React.FunctionComponent<WeatherWeekProps> = ({
  sunrise,
  sunset,
  weekWeather,
}) => {
  const [week, setWeek] = useState(weekDay);
  const weather = weekWeather;

  const sunriseHour = new Date(Number(sunrise)).getMinutes();
  const sunriseMinutes = new Date(Number(sunrise)).getSeconds();
  const sunsetHour = new Date(Number(sunset)).getMinutes();
  const sunsetMinutes = new Date(Number(sunset)).getSeconds();

  const classes = useStyles();
  const openWeatherSite = () =>
    window.open('https://openweathermap.org/', '_blank');

  useEffect(() => {
    setWeek(updateWeek());
  }, []);

  return (
    <Grid container direction='column' className={classes.root}>
      <Typography className={classes.title} variant='h5'>
        5 days forecast
      </Typography>
      {weather ? (
        week.map((day, i) => {
          const info = weather[i];
          return i === 5 || i === 6 ? null : (
            <Grid className={classes.day} item key={i}>
              <WeekDay info={info} day={day} number={i} />
            </Grid>
          );
        })
      ) : (
        <Typography variant='h6' className={classes.error}>
          No data
        </Typography>
      )}
      <Grid item className={classes.weatherMap}>
        <Typography variant='h5'>Daylight hours</Typography>
        <Grid
          container
          className={classes.dayCicle}
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item>
            <WbSunnyIcon fontSize='large' />
            <Typography variant='h6'>
              {sunrise ? `${sunriseHour}:${sunriseMinutes} AM` : 'No data'}
            </Typography>
          </Grid>
          <ArrowForwardIcon fontSize='large' />
          <Grid item>
            <Brightness2Icon fontSize='large' />
            <Typography variant='h6'>
              {sunset ? `${sunsetHour}:${sunsetMinutes} PM` : 'No data'}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.openWeather}>
        <Button className={classes.logoButton} onClick={openWeatherSite}>
          <CardMedia className={classes.logo} image={openWeatherLogo} />
        </Button>
      </Grid>
    </Grid>
  );
};
