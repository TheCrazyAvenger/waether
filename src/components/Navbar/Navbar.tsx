import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '../../store/actionCreator/drawer';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'inherit',
    boxShadow: 'none',
  },
  container: {
    justifyContent: 'space-between',
    padding: '0 5px',
  },
  button: {
    color: 'white',
  },
});

export const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  const cityName = useTypedSelector((state) => state.weather.name);
  const country = useTypedSelector((state) => state.weather.country);

  const dispatch = useDispatch();

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar className={classes.container}>
        <IconButton
          onClick={() => dispatch(toggleDrawerMenu())}
          className={classes.button}
        >
          <MenuIcon fontSize='large' />
        </IconButton>
        <Typography variant='h6'>
          {cityName && country ? `${cityName}, ${country}` : 'No data'}
        </Typography>
        <IconButton className={classes.button}>
          <NavLink to='/settings'>
            <SettingsIcon fontSize='large' />
          </NavLink>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
