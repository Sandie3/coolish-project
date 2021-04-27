import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import A from './desktop/A';
import B from './desktop/B';
import C from './desktop/C';
import Home from './desktop/Home';

import '../App.scss'


const DesktopView = () => {
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

export default DesktopView;
