import React, { useEffect, useState } from 'react';
import {
  Button,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import {
  AddressSuggestions,
  DaDataSuggestion,
  DaDataAddress,
} from 'react-dadata';
import { toggleDrawerMenu } from '../../store/actionCreator/drawer';
import { AppBar, Toolbar } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch } from 'react-redux';
import { searchCity } from '../../store/actionCreator/drawer';
import { fetchWeather } from '../../store/actionCreator/weather';
import 'react-dadata/dist/react-dadata.css';

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

  const [value, setValue] = useState<
    DaDataSuggestion<DaDataAddress> | undefined
  >();

  const cityName = localStorage.getItem('cityName');

  useEffect(() => {
    if (cityName) {
      dispatch(searchCity(cityName));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (value) {
      const city = value.data.city?.toString();
      if (city) {
        dispatch(fetchWeather(city));
        dispatch(searchCity(city));
      }
    }
  }, [value, dispatch]);

  const resultItem = () => {
    return (
      <Button>
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
          <AddressSuggestions
            token='14dc84f607aa8f84c2cf9aac0cc7f04598264746'
            value={value}
            onChange={setValue}
            filterLanguage='en'
            filterLocations={[
              {
                country: '*',
              },
            ]}
          />
        </Toolbar>
      </AppBar>
      <Grid container className={classes.results} direction='column'>
        {name ? resultItem() : 'Empty'}
      </Grid>
    </Drawer>
  );
};
