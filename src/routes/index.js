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
                return <Redirect to="/defi"/>
              }}
          />
          <Route path="/defi" component={Home}/>
          <Route render={() => <Redirect to="/"/>}/>
      </Switch>
  );
}

export default Routes;