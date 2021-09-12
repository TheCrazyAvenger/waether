import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Details } from './Details/Details';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import CardMedia from '@material-ui/core/CardMedia';

type WeatherNowProps = {
  temp: number;
  humidity: number;
  pressure: number;
  wind: number;
  description: string | null;
  icon: string | null;
};

const useStyles = makeStyles({
  root: {
    padding: '50px 0',
    textAlign: 'center',
  },
  icon: {
    width: 80,
    height: 60,
  },
  update: {
    marginTop: 15,
  },
});

export const WeatherNow: React.FunctionComponent<WeatherNowProps> = ({
  temp,
  humidity,
  pressure,
  wind,
  description,
  icon,
}) => {
  const classes = useStyles();

  return (
    <Grid container direction='column' className={classes.root} spacing={5}>
      <Grid item>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item>
            {icon ? (
              <CardMedia
                className={classes.icon}
                image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              />
            ) : (
              <HelpIcon fontSize={'large'} />
            )}
          </Grid>
          <Grid item>
            <Typography variant='h2'>{`${Math.round(temp)}°`}</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent='center'>
          <Typography variant='h6'>
            {description ? description : 'No data'}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Details humidity={humidity} pressure={pressure} wind={wind} />
        <Typography className={classes.update}>
          Last Update: {`${new Date().toLocaleString()}`}
        </Typography>
      </Grid>
    </Grid>
  );
};
