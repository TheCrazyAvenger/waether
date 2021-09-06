import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import { closeDrawerMenu } from '../../store/actionCreator/drawer';
import { AppBar, Toolbar, TextField } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
  textfield: {
    width: 500,
  },
});

export const DrawerMenu: React.FunctionComponent = (props) => {
  const openDrawer = useTypedSelector((state) => state.drawer.openDrawer);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Drawer
      open={openDrawer}
      onClose={() => dispatch(closeDrawerMenu())}
      anchor='left'
    >
      <AppBar position='static'>
        <Toolbar className={classes.root}>
          <TextField
            className={classes.textfield}
            id='standard-basic'
            label='Введите город'
          />
        </Toolbar>
      </AppBar>
      <Grid container direction='column'>
        {props.children}
      </Grid>
    </Drawer>
  );
};
