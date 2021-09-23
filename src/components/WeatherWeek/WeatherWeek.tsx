import React, { useEffect, useMemo, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { weekDay } from '@utilities/constants';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { WeekDay } from './WeekDay/WeekDay';
import { Button, Paper, Typography } from '@material-ui/core';
import { updateWeek } from '@utilities/utilities';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import openWeatherLogo from '@images/OpenWeather-Logo-Light.png';
import openWeatherLogoDark from '@images/OpenWeather-Logo-Dark.png';
import { useTypedSelector } from '@store/hooks/useTypedSelector';
import { checkTime } from '@utilities/utilities';
import mapImage from '@images/map.png';

type WeatherWeekProps = {
  sunrise: string | null;
  sunset: string | null;
  weekWeather: Array<object> | null;
  nightWeather: Array<object> | null;
};

const useStyles = makeStyles({
  root: {
    position: 'relative',
    borderRadius: 10,
    paddingTop: 60,
    textAlign: 'center',
  },
  map: {
    width: 200,
    position: 'absolute',
    top: -30,
    left: '50%',
    padding: '5px 10px',
    paddingRight: 20,
    transform: 'translateX(-50%)',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
  },
  mapImg: {
    width: 50,
    height: 50,
  },
  weatherMap: {
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
  nightWeather,
}) => {
  const [week, setWeek] = useState(weekDay);
  const weather = weekWeather;
  const night = nightWeather;

  const darkMode = useTypedSelector((state) => state.settings.darkMode);

  const sunriseHour = checkTime(new Date(Number(sunrise) * 1000).getHours());
  const sunriseMinutes = checkTime(
    new Date(Number(sunrise) * 1000).getMinutes()
  );
  const sunsetHour = checkTime(new Date(Number(sunset) * 1000).getHours());
  const sunsetMinutes = checkTime(new Date(Number(sunset) * 1000).getMinutes());

  const classes = useStyles();

  const openMap = () => {
    window.open('https://openweathermap.org/weathermap', '_blank');
  };

  const openWeatherSite = () =>
    window.open('https://openweathermap.org/', '_blank');

  useEffect(() => {
    setWeek(updateWeek());
  }, []);

  const getDays = useMemo(() => {
    if (weather && night) {
      return week.map((day, i) => {
        const info = weather[i];
        const infoNight = night[i];

        if (i === 5 || i === 6) return null;

        return (
          <Grid className={classes.day} item key={i}>
            <WeekDay info={info} infoNight={infoNight} day={day} number={i} />
          </Grid>
        );
      });
    } else {
      return (
        <Typography variant='h6' className={classes.error}>
          No data
        </Typography>
      );
    }
  }, [classes.day, classes.error, night, weather, week]);

  return (
    <Paper>
      <Grid container direction='column' className={classes.root}>
        <Paper className={classes.map}>
          <Grid container>
            <Button onClick={openMap}>
              <Grid item>
                <CardMedia className={classes.mapImg} image={mapImage} />
              </Grid>
              <Grid item>
                <Typography>View on map</Typography>
              </Grid>
            </Button>
          </Grid>
        </Paper>
        <Typography variant='h5'>5 days forecast</Typography>
        {getDays}
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
                {sunrise ? `${sunriseHour}:${sunriseMinutes}` : 'No data'}
              </Typography>
            </Grid>
            <ArrowForwardIcon fontSize='large' />
            <Grid item>
              <Brightness2Icon fontSize='large' />
              <Typography variant='h6'>
                {sunset ? `${sunsetHour}:${sunsetMinutes}` : 'No data'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.openWeather}>
          <Button className={classes.logoButton} onClick={openWeatherSite}>
            <CardMedia
              className={classes.logo}
              image={darkMode ? openWeatherLogoDark : openWeatherLogo}
            />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
