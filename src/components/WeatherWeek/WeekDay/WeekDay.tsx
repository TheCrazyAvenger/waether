import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Details } from '@components/WeatherNow/Details/Details';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import { useTypedSelector } from '@store/hooks/useTypedSelector';

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
  stnd: {
    width: 160,
  },
  mtr: {
    width: 140,
  },
});

export const WeekDay: React.FunctionComponent<WeekDayProps> = ({
  day,
  number,
  info,
  infoNight,
}) => {
  const classes = useStyles();

  const units = useTypedSelector((state) => state.weather.units);

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
    let name;
    if (number === 0) {
      name = 'Today';
    } else {
      if (number === 1) {
        name = 'Tomorrow';
      } else {
        name = day;
      }
    }
    return <p className={className}>{`${dateDay}, ${name}`}</p>;
  };

  const getDays = () => {
    if (day === 'Saturday' || day === 'Sunday') {
      return renderDay(classes.weekends);
    } else {
      return renderDay('');
    }
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
            <Grid item>{getDays()}</Grid>
            <Grid item>
              <Grid
                container
                className={
                  units === 'metric' || !units ? classes.mtr : classes.stnd
                }
                justifyContent='space-between'
                alignItems='center'
                spacing={1}
              >
                <Grid item>
                  <CardMedia
                    className={classes.logo}
                    image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  />
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
