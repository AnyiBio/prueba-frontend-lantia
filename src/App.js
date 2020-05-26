import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PageTwo from './pages/PageTwo';

import 'bootstrap/dist/css/bootstrap.min.css';
import PageThree from './pages/PageThree';
import Activity from './pages/Activity';
import PageFour from './pages/PageFour';
import Result from './pages/Result';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/two' component={PageTwo} />
          <Route exact path='/three' component={PageThree} />
          <Route exact path='/activity' component={Activity} />
          <Route exact path='/four' component={PageFour} />
          <Route exact path='/result' component={Result} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
