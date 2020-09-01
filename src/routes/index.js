import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home     from './Home';

const Routes = () => {
  return (
      <Switch>
          <Route 
              exact
              path="/"
              render={() => {
                return <Redirect to="/home"/>
              }}
          />
          <Route path="/home" component={Home}/>
          <Route render={() => <Redirect to="/"/>}/>
      </Switch>
  );
}

export default Routes;