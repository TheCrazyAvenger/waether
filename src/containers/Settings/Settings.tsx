import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Checkbox,
  Button,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { useTypedSelector } from '@store/hooks/useTypedSelector';
import { setDarkMod } from '@store/actionCreator/settings';
import { getDarkMode } from '@utilities/utilities';
import { fetchWeather } from '@store/actionCreator/weather';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    textAlign: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 20,
    paddingBottom: 15,
  },
  settings: {
    borderBottom: 'rgb(170, 161, 161) 1px solid',
    paddingBottom: 10,
    marginBottom: 30,
  },
});

const Settings: React.FunctionComponent = () => {
  const classes = useStyles();

  const darkMode = useTypedSelector((state) => state.settings.darkMode);
  const dispatch = useDispatch();

  const unitsType = useTypedSelector((state) => state.weather.units);
  const [units, setUnits] = useState<string>(unitsType ? unitsType : 'metric');

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  const changeUnits = (e: React.ChangeEvent<any>) => {
    setUnits(e.target.value);
    localStorage.setItem('unitsType', e.target.value);
  };

  useEffect(() => {
    const dark = getDarkMode();

    if (dark) {
      dispatch(setDarkMod(Boolean(dark)));
    }
  }, [dispatch]);

  const setTheme = () => {
    localStorage.setItem('dark', (!darkMode).toString());
    dispatch(setDarkMod(null));
  };

  return (
    <Paper className={classes.root}>
      <Typography variant='h4' className={classes.title}>
        Settings
      </Typography>
      <Grid container direction='column'>
        <Grid
          container
          justifyContent='space-between'
          className={classes.settings}
        >
          <Grid item>
            <Typography variant='h5'>Dark mode</Typography>
          </Grid>
          <Grid item>
            <Checkbox checked={darkMode} onClick={setTheme} />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent='space-between'
          className={classes.settings}
        >
          <Grid item>
            <Typography variant='h5'>Units</Typography>
          </Grid>
          <Grid item>
            <Select value={units} onChange={changeUnits}>
              <MenuItem value='metric'>Metric</MenuItem>
              <MenuItem value='standart'>Standart</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <NavLink to={'/'}>
          <Button variant='contained' color='default'>
            Back
          </Button>
        </NavLink>
      </Grid>
    </Paper>
  );
};

export default Settings;
