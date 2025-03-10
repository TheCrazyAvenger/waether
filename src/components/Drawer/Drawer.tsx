import React, { useEffect, useState } from 'react';
import {
  Button,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useTypedSelector } from '@store/hooks/useTypedSelector';
import { toggleDrawerMenu } from '@store/actionCreator/drawer';
import { fetchWeather, setCitys } from '@store/actionCreator/weather';
import {
  AddressSuggestions,
  DaDataSuggestion,
  DaDataAddress,
} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { AppBar, Toolbar } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    padding: 20,
    minWidth: 300,
  },
  results: {
    padding: 20,
    textAlign: 'center',
  },
  search: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
  },
  logo: {
    width: 60,
    height: 30,
  },
});

export const DrawerMenu: React.FunctionComponent = () => {
  const openDrawer = useTypedSelector((state) => state.drawer.openDrawer);
  const name = useTypedSelector((state) => state.weather.name);
  const country = useTypedSelector((state) => state.weather.country);
  const temp = useTypedSelector((state) => state.weather.temp);
  const icon = useTypedSelector((state) => state.weather.icon);
  const cities = useTypedSelector((state) => state.weather.cities);

  const dispatch = useDispatch();
  const classes = useStyles();

  const [value, setValue] = useState<
    DaDataSuggestion<DaDataAddress> | undefined
  >();

  useEffect(() => {
    dispatch(setCitys());

    if (value) {
      const city = value.data.city?.toString();

      if (city) {
        dispatch(setCitys(`${city}, ${country}`));
        dispatch(fetchWeather(city));
      }
    }
  }, [value, country, dispatch]);

  const resultItem = () => {
    if (name) {
      return (
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
      );
    } else {
      return 'No data';
    }
  };

  const citiesList = () => {
    if (cities.length === 0) {
      return <Typography>Search cities to add them to list</Typography>;
    }
    return cities.map((city, i) => {
      return (
        <Grid
          container
          key={i}
          className={classes.search}
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item>
            <Button onClick={() => searchCity(city)}>
              <Typography variant='h6'>{city}</Typography>
            </Button>
          </Grid>
          <IconButton onClick={(e) => deletePanel(e, city)}>
            <CancelIcon />
          </IconButton>
        </Grid>
      );
    });
  };

  const searchCity = (name: string) => {
    const city = name.split(', ')[0];
    dispatch(fetchWeather(city));
  };

  const deletePanel = (e: any, name: string) => {
    const item = e.target.closest('.MuiGrid-root');
    const deleteCity = name.split(', ')[0];
    setCitys(null, deleteCity);
    item.remove();
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
      <Grid container className={classes.results}>
        {resultItem()}
      </Grid>
      <Grid container className={classes.results} direction='column'>
        {citiesList()}
      </Grid>
    </Drawer>
  );
};
