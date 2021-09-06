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
import { openDrawerMenu } from '../../store/actionCreator/drawer';

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

  const dispatch = useDispatch();

  if (window.location.pathname !== '/settings') {
    return (
      <AppBar position='static' className={classes.root}>
        <Toolbar className={classes.container}>
          <IconButton
            onClick={() => dispatch(openDrawerMenu())}
            className={classes.button}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Typography variant='h6'>Novopolotsk, BLR</Typography>
          <IconButton className={classes.button}>
            <NavLink to='/settings'>
              <SettingsIcon fontSize='large' />
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  } else {
    return null;
  }
};
