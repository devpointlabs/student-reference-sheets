import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import NavBar from './components/shared/Navbar';
import Debug from './components/sheets/Debug';
import GitFlows from './components/sheets/GitFlows';
import GitRefs from './components/sheets/GitRefs';

const App = ({}) => (
  <>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/debug' component={Debug} />
      <Route exact path='/git-flows' component={GitFlows} />
      <Route exact path='/git-refs' component={GitRefs} />
      <Route component={Nomatch} />
    </Switch>
  </>
)

export default App;
