import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Page404 from '../pages/Page404';
import { Users } from '../pages/Users';

export default function Routes() {
  const { initialized } = useKeycloak();
  if(!initialized) {
    return <Loading />
  }
  return (
    <Switch>
      <Route path="/login/" component={LoginPage} />
      <PrivateRoute path="/users/:id?" component={Users} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
