import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home       from './Home';
import Lend       from './Lend';
import Borrow     from './Borrow';
import Borrowed   from './Borrowed';
import Withdraw   from './Withdraw';
import Interest   from './Interest';
import Market     from './Market';
import Wallet     from './Wallet';

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
          <Route path="/lend" component={Lend}/>
          <Route path="/interest" component={Interest}/>
          <Route path="/market" component={Market}/>
          <Route path="/wallet" component={Wallet}/>
          <Route path="/borrow" component={Borrow}/>
          <Route path="/borrowed" component={Borrowed}/>
          <Route path="/withdraw" component={Withdraw}/>
          <Route render={() => <Redirect to="/"/>}/>
      </Switch>
  );
}

export default Routes;