import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

type WeekDayProps = {
  day: string;
  number: number;
  monthDay: number;
};

const useStyles = makeStyles({
  weekDay: {
    color: 'black',
  },
  weekends: {
    color: 'red',
  },
  root: {
    borderBottom: 'rgb(170, 161, 161) 1px solid',
    padding: 15,
    color: 'black',
  },
  logo: {
    width: 30,
    height: 30,
  },
});

export const WeekDay: React.FunctionComponent<WeekDayProps> = ({
  day,
  number,
  monthDay,
}) => {
  const classes = useStyles();
  let logo = require('../../../images/cloudy.png');

  const renderDay = (className: any) => {
    return (
      <p className={className}>{`${monthDay}, ${
        number === 0 ? 'Сегодня' : number === 1 ? 'Завтра' : day
      }`}</p>
    );
  };

  return (
    <Grid item className={classes.root}>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item>
          {day === 'Суббота' || day === 'Воскресенье'
            ? renderDay(classes.weekends)
            : renderDay(classes.weekDay)}
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent='space-between'
            alignItems='center'
            spacing={1}
          >
            <Grid item>
              <img className={classes.logo} src={logo.default} alt='cloudy' />
            </Grid>
            <Grid item>
              <Typography variant='h5'>15°</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
