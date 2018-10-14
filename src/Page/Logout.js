import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Login extends Component {

  constructor(){
    super();

    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    this.state = {
      redirect: false
    }

    localStorage.removeItem(this.CONFIG_SESSION_NAME);

    this.state = {
      redirect: true
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render(){
    return (
      <h1 className="text-center">
        {this.renderRedirect()}
        <br />
        <br />
        <i className="fa fa-spinner fa-spin"></i>
        <br />Loading...
      </h1>
    );
  }
}

export default Login;
