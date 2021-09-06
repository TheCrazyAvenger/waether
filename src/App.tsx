import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Weather from './containers/Weather/Weather';
import Settings from './containers/Settings/Settings';

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Weather} />
        <Route path='/settings' component={Settings} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
};

export default App;
