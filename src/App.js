import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery';
import 'bootstrap';

import './assets/style.css';

import Homelayout from './Layout/Home/Homelayout';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <BrowserRouter>
            <Homelayout />
          </BrowserRouter>
          {/*
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
          </Switch>
          */}
        </header>
      </div>
    );
  }
}

export default App;
