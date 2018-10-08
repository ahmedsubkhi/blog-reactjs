import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from './Form';


class Loginlayout extends Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="home-layout">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loginlayout;
