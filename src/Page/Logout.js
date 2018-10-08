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
      <h2>Loading...</h2>
    );
  }
}

export default Login;
