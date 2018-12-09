import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import Form from 'Layout/Register/Form';


class RegisterButton extends Component {

  constructor(){
    super();
    this.state = {
      isAuthenticated: false,
      user:null,
      redirect: false,
    }

    this.API_URL = process.env.REACT_APP_API_URL;
    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    this.GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  }

  googleResponse = (response) => {
    const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };

    fetch(this.API_URL + '/auth/register', options).then(r => {
      r.json().then(data => {
        localStorage.setItem(this.CONFIG_SESSION_NAME, JSON.stringify(data));
        this.setState({ isAuthenticated: data.auth, user: data.data });
        if(data.data.active){
          this.setState({ redirect: true });
        }
      });
    });
  }

  logout = () => {
    this.setState({isAuthenticated: false, user: null})
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render(){
    let content = !!this.state.isAuthenticated && this.state.user.email ?
      (
        <Form googleProfile={this.state.user} />
      ) :
      (
        <div className="text-center">
          <GoogleLogin
            clientId={this.GOOGLE_CLIENT_ID}
            buttonText="Register with Google"
            onSuccess={this.googleResponse}
            onFailure={this.googleResponse} />
        </div>
      );
    return (
      <div className="form-login">
        {this.renderRedirect()}
        <div className="col-md-6 offset-md-3">
          <div className="form-group">
            <h5 className="col-md-12 text-center">Register here !</h5>
            <hr />
          </div>
          <div className="form-group">
            <div className="register-layout">
              {content}
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12 text-center">
              <span>Or <a href="/">Go to Home</a></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterButton;
