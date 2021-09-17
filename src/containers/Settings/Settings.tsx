import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setDarkMod } from '../../store/actionCreator/settings';
import {
  Grid,
  Paper,
  Checkbox,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { getDarkMode } from '../../utilities/utilities';
import { fetchWeather } from '../../store/actionCreator/weather';

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

  const unitsType = localStorage.getItem('unitsType');
  const [units, setUnits] = useState<string>(unitsType ? unitsType : 'metric');

  const dark = getDarkMode();

  const cityName = localStorage.getItem('cityName');

  useEffect(() => {
    if (cityName && unitsType) {
      dispatch(fetchWeather(cityName, unitsType));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unitsType]);

  const changeUnits = (e: React.ChangeEvent<any>) => {
    setUnits(e.target.value);
    localStorage.setItem('unitsType', e.target.value);
  };

  useEffect(() => {
    if (dark) {
      dispatch(setDarkMod(Boolean(dark)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
