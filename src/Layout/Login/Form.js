import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Form extends Component {

  constructor(){
    super();

    this.API_URL = process.env.REACT_APP_API_URL;

    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    this.state = {
      message: "",
      redirect: false
    }
  }

  getApiAuthLogin = async (data) => {
    const response = await fetch(this.API_URL + '/auth/login', {
      method: 'post',
      body: data
    });
    const result = await response.json();

    if (response.status !== 200) throw result.message;

    return result;
  }

  doLogin(e){
    e.preventDefault();

    this.setState({ message: <h4><i className="fa fa-spin fa-spinner"></i></h4> });

    const data = new FormData(e.target);

    this.getApiAuthLogin(data)
    .then((res) => {
        localStorage.setItem(this.CONFIG_SESSION_NAME, JSON.stringify(res));
        this.setState({ redirect: true });
      }
    )
    .catch(err =>
      this.setState({ message: err })
    );
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render(){
    return (
      <div className="form-login">
        {this.renderRedirect()}
        <form className="form-horizontal" onSubmit={ this.doLogin.bind(this) }>
          <div className="col-md-6 offset-md-3">
            <div className="form-group">
              <h5 className="col-md-12 text-center">Login here !</h5>
              <hr />
            </div>
            <div className="form-group">
              <label className="control-label col-md-12">Email</label>
              <div className="col-md-12">
                <input type="text" className="form-control" name="email" id="email" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-12">Password</label>
              <div className="col-md-12">
                <input type="password" className="form-control" name="password" id="password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <button className="btn btn-primary" type="submit"><i className="fa fa-sign-in"></i> Login</button>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <span>Or <a href="/">Go to Home</a></span>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <div className="text-danger">{this.state.message}</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
