import React from 'react';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { makeStyles } from '@material-ui/core/styles';
import { Details } from '../../WeatherNow/Details/Details';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';

type WeekDayProps = {
  day: string;
  number: number;
  info: { [key: string]: any };
  infoNight: { [key: string]: any };
};

const useStyles = makeStyles({
  accord: {
    display: 'block',
    padding: '0 10px',
  },
  accordDetails: {
    display: 'block',
  },
  weekends: {
    color: 'red',
  },
  root: {
    width: '100%',
    padding: 15,
  },
  logo: {
    width: 50,
    height: 30,
  },
  night: {
    color: 'rgb(170, 161, 161)',
  },
  weatherStnd: {
    width: 160,
  },
  weatherMetric: {
    width: 135,
  },
});

export const WeekDay: React.FunctionComponent<WeekDayProps> = ({
  day,
  number,
  info,
  infoNight,
}) => {
  const description = useTypedSelector((state) => state.weather.description);
  const classes = useStyles();

  const unitsType = localStorage.getItem('unitsType');

  const weatherInfo = info;
  const time = weatherInfo['dt_txt'];
  const { temp, humidity, pressure } = weatherInfo.main;
  const wind = weatherInfo.wind.speed;
  const icon = weatherInfo.weather[0].icon;

  const night = infoNight;
  const tempNight = night.main.temp;

  const date = new Date(time);
  const dateDay = date.getDate();

  const renderDay = (className: string) => {
    return (
      <p className={className}>{`${dateDay}, ${
        number === 0 ? 'Today' : number === 1 ? 'Tomorrow' : day
      }`}</p>
    );
  };

  return (
    <Accordion>
      <AccordionSummary
        aria-controls='panel1a-content'
        id='panel1a-header'
        className={classes.accord}
      >
        <Grid item className={classes.root}>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item>
              {day === 'Saturday' || day === 'Sunday'
                ? renderDay(classes.weekends)
                : renderDay('')}
            </Grid>
            <Grid item>
              <Grid
                container
                className={
                  unitsType === 'metric' || unitsType === null
                    ? classes.weatherMetric
                    : classes.weatherStnd
                }
                justifyContent='space-between'
                alignItems='center'
                spacing={1}
              >
                <Grid item>
                  {description ? (
                    <CardMedia
                      className={classes.logo}
                      image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    />
                  ) : (
                    <HelpIcon fontSize={'large'} />
                  )}
                </Grid>
                <Grid item>
                  <Typography variant='h5'>{`${Math.round(temp)}°`}</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.night}
                    variant='h6'
                  >{`${Math.round(tempNight)}°`}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails className={classes.accordDetails}>
        <Details humidity={humidity} pressure={pressure} wind={wind} />
      </AccordionDetails>
    </Accordion>
  );
};
