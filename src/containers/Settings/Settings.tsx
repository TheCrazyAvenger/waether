import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setDarkMod } from '../../store/actionCreator/settings';
import { Grid, Paper, Checkbox, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

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
    borderBottom: 'rgb(170, 161, 161) 1px solid',
  },
  settings: {
    width: '100%',
    margin: '0 auto',
    borderBottom: 'rgb(170, 161, 161) 1px solid',
    marginBottom: 30,
  },
});

const Settings: React.FunctionComponent = () => {
  const classes = useStyles();

  const darkMode = useTypedSelector((state) => state.settings.darkMode);
  const dispatch = useDispatch();

  const setTheme = () => {
    dispatch(setDarkMod());
  };

  return (
    <Paper className={classes.root}>
      <Typography variant='h4' className={classes.title}>
        Settings
      </Typography>
      <Grid container direction='column'>
        <Grid
          container
          spacing={7}
          justifyContent='center'
          className={classes.settings}
        >
          <Grid item>
            <Typography variant='h5'>Dark mode</Typography>
            <Checkbox checked={darkMode} onClick={setTheme} />
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
