import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery';
import 'bootstrap';

import './assets/style.css';

import Homelayout from './Layout/Home/Homelayout';
import Loginlayout from './Layout/Login/Loginlayout';
import Logout from './Page/Logout';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Loginlayout} />
              <Route path="/logout" component={Logout} />
              <Route component={Homelayout} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
