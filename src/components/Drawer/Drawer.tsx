import React, { useEffect, useState } from 'react';
import {
  Button,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import { toggleDrawerMenu } from '../../store/actionCreator/drawer';
import { AppBar, Toolbar, TextField } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch } from 'react-redux';
import { searchCity } from '../../store/actionCreator/drawer';
import { fetchWeather } from '../../store/actionCreator/weather';

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
  textfield: {
    width: 300,
  },
  results: {
    padding: 20,
    textAlign: 'center',
  },
  search: {
    padding: '10px 0',
    borderTop: 'rgb(170, 161, 161) 1px solid',
    borderBottom: 'rgb(170, 161, 161) 1px solid',
  },
  logo: {
    width: 60,
    height: 30,
  },
});

export const DrawerMenu: React.FunctionComponent = () => {
  const openDrawer = useTypedSelector((state) => state.drawer.openDrawer);
  const name = useTypedSelector((state) => state.drawer.name);
  const country = useTypedSelector((state) => state.drawer.country);
  const temp = useTypedSelector((state) => state.drawer.temp);
  const icon = useTypedSelector((state) => state.drawer.icon);

  const dispatch = useDispatch();
  const classes = useStyles();

  const [inputValue, setInputValue] = useState<string>('');

  const cityName = localStorage.getItem('cityName');

  useEffect(() => {
    if (cityName) {
      dispatch(searchCity(cityName));
    }
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(searchCity(e.target.value));
  };

  const searchHandler = () => {
    if (name) dispatch(fetchWeather(name));
    dispatch(toggleDrawerMenu());
    setInputValue('');
  };

  const resultItem = () => {
    return (
      <Button onClick={searchHandler}>
        <Grid
          container
          className={classes.search}
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h6'>{`${name}, ${country}`}</Typography>
          </Grid>
          <Grid item>
            <CardMedia
              image={`http://openweathermap.org/img/wn/${icon}.png`}
              className={classes.logo}
            />
            <Typography variant='h5'>
              {temp ? `${Math.round(temp)}°` : null}
            </Typography>
          </Grid>
        </Grid>
      </Button>
    );
  };

  return (
    <Drawer
      open={openDrawer}
      onClose={() => dispatch(toggleDrawerMenu())}
      anchor='left'
    >
      <AppBar position='static'>
        <Toolbar className={classes.root}>
          <TextField
            value={inputValue}
            className={classes.textfield}
            id='standard-basic'
            onChange={changeHandler}
            label='Enter city name'
          />
        </Toolbar>
      </AppBar>
      <Grid container className={classes.results} direction='column'>
        {name ? resultItem() : 'Empty'}
      </Grid>
    </Drawer>
  );
};
