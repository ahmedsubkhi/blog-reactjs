import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Form from 'Layout/Register/Form';
import RegisterButton from 'Layout/Register/RegisterButton';


class Registerlayout extends Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="register-layout">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <Switch>
                <Route path="/register" component={RegisterButton} />
                <Route path="/register/form" component={Form} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registerlayout;
