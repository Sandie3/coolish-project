import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import A from './mobile/A';
import B from './mobile/B';
import C from './mobile/C';
import Home from './mobile/Home';

import '../App.scss'

const MobileView = () => {
  return (
    <>
      <Router>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/whatwedo" component={A} />
            <Route exact path="/maintainable" component={B} />
            <Route exact path="/getintouch" component={C} />
          </Switch>

      </Router>
    </>
  );
}

export default MobileView;
