import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Details } from './Details/Details';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    padding: '50px 0',
  },
  icon: {
    width: 60,
    height: 60,
  },
});

export const WeatherNow: React.FunctionComponent = () => {
  const classes = useStyles();
  let weatherIcon = require('../../images/cloudy.png');

  return (
    <Grid container direction='column' className={classes.root} spacing={5}>
      <Grid item>
        <Grid container justifyContent='center' alignItems='center' spacing={1}>
          <Grid item>
            <img
              className={classes.icon}
              src={weatherIcon.default}
              alt='cloudy'
            />
          </Grid>
          <Grid item>
            <Typography variant='h2'>15°</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent='center'>
          <Typography variant='h6'>Cloudy</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Details />
      </Grid>
    </Grid>
  );
};
