import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Layout from './hoc/Layout/Layout';
import Weather from './containers/Weather/Weather';
import Settings from './containers/Settings/Settings';
import { createTheme } from '@material-ui/core/styles';
import { useTypedSelector } from './store/hooks/useTypedSelector';

const App: React.FunctionComponent = () => {
  const darkMode = useTypedSelector((state) => state.settings.darkMode);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path='/' exact component={Weather} />
          <Route path='/settings' component={Settings} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
