import React from 'react';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

type WeekDayProps = {
  day: string;
  number: number;
  info: { [key: string]: any };
};

const useStyles = makeStyles({
  weekends: {
    color: 'red',
  },
  root: {
    borderBottom: 'rgb(170, 161, 161) 1px solid',
    padding: 15,
  },
  logo: {
    width: 50,
    height: 30,
  },
});

export const WeekDay: React.FunctionComponent<WeekDayProps> = ({
  day,
  number,
  info,
}) => {
  const description = useTypedSelector((state) => state.weather.description);
  const classes = useStyles();

  const weatherInfo = info;
  const time = weatherInfo['dt_txt'];
  const temp = weatherInfo.main.temp;
  const icon = weatherInfo.weather[0].icon;

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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
