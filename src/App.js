import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nomatch from './components/shared/Nomatch';
import NavBar from './components/shared/Navbar';
import Debug from './components/sheets/Debug';
import GitFlows from './components/sheets/GitFlows';
import GitRefs from './components/sheets/GitRefs';
import Rails from './components/sheets/Rails';
import { Container } from 'semantic-ui-react';
import Footer from './components/shared/Footer';

const App = () => (
  <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path='/' component={Debug} />
        <Route exact path='/debug' component={Debug} />
        <Route exact path='/git-flows' component={GitFlows} />
        <Route exact path='/git-refs' component={GitRefs} />
        <Route exact path='/rails-refs' component={Rails} />
        <Route component={Nomatch} />
      </Switch>
    </Container>
    <Footer />
  </>
)

export default App;
