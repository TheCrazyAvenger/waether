import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { DrawerMenu } from '../../components/Drawer/Drawer';
import bg from '../../images/bg.jpg';
import bgDark from '../../images/bgDark.jpg';

import { useTypedSelector } from '../../store/hooks/useTypedSelector';

const Layout: React.FunctionComponent = (props) => {
  const darkMode = useTypedSelector((state) => state.settings.darkMode);
  const useStyles = makeStyles({
    root: {
      maxWidth: 410,
      minHeight: '100vh',
      margin: '0 auto',
      padding: 10,
      background: `url(${darkMode ? bgDark : bg}) center fixed`,
    },
  });
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <DrawerMenu />
      <Grid>{props.children}</Grid>
    </Grid>
  );
};

export default Layout;
