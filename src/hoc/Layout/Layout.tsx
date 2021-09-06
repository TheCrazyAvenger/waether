import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Navbar } from '../../components/Navbar/Navbar';
import { DrawerMenu } from '../../components/Drawer/Drawer';
import bg from '../../images/bg.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 410,
    margin: '0 auto',
    padding: 10,
    background: `url(${bg}) center no-repeat fixed`,
  },
});

const Layout: React.FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <DrawerMenu />
      <Navbar />
      <Grid>{props.children}</Grid>
    </Grid>
  );
};

export default Layout;
