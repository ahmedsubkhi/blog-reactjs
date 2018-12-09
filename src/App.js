import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery';
import 'bootstrap';

import 'assets/style-dark.css';

import Homelayout from 'Layout/Home/Homelayout';
import Loginlayout from 'Layout/Login/Loginlayout';
import Registerlayout from 'Layout/Register/Registerlayout';
import Logout from 'Page/Logout';
import AdminPosts from 'Page/Admin/Posts';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Loginlayout} />
              <Route path="/register" component={Registerlayout} />
              <Route path="/logout" component={Logout} />
              <Route path="/admin" component={AdminPosts} />
              <Route path="/contact" component={Homelayout} />
              <Route path="/aboutme" component={Homelayout} />
              <Route path="/posts" component={Homelayout} />
              <Route exact path="/" component={Homelayout} />
              <Route component={Homelayout} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
