import React, { Component } from 'react';


class Login extends Component {

  constructor(){
    super();

    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    localStorage.removeItem(this.CONFIG_SESSION_NAME);

    window.location.href = "/";
  }

  render(){
    return (
      <h1 className="text-center">
        <br />
        <br />
        <i className="fa fa-spinner fa-spin"></i>
        <br />Loading...
      </h1>
    );
  }
}

export default Login;
