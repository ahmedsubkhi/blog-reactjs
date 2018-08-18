import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
//import jquery from 'jquery';
import 'bootstrap';

import './assets/style.css';

import Homelayout from './Layout/Home/Homelayout';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <Homelayout />
        </header>
      </div>
    );
  }
}

export default App;
