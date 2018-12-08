import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Form extends Component {

  constructor(props){
    super(props);

    this.API_URL = process.env.REACT_APP_API_URL;

    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    this.state = {
      message: "",
      redirect: false,
      profile: this.props.googleProfile
    }
  }

  componentDidMount(){
    this.currentAuth = JSON.parse(localStorage.getItem(this.CONFIG_SESSION_NAME));
  }

  formatUsername(name){
    return name.replace(" ", "").toLowerCase();
  }

  postApiAuthActivate = async (data) => {
    const response = await fetch(this.API_URL + '/auth/activate', {
      method: 'post',
      headers: new Headers({
        'x-access-token': this.currentAuth.token
      }),
      body: data
    });
    const result = await response.json();

    if (response.status !== 200) throw result.message;

    return result;
  }

  doRegister(e){
    e.preventDefault();

    this.setState({ message: <h4><i className="fa fa-spin fa-spinner"></i></h4> });

    const data = new FormData(e.target);

    this.postApiAuthActivate(data)
    .then((res) => {
        localStorage.setItem(this.CONFIG_SESSION_NAME, JSON.stringify(res));
        if(res.auth){
          this.setState({ redirect: true });
        } else {
          this.setState({ message: res.message })
        }
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
        <form className="form-horizontal" onSubmit={ this.doRegister.bind(this) }>
          <div className="col-md-12">
            <div className="form-group">
              <label className="control-label col-md-12">Username</label>
              <div className="col-md-12">
                <input type="text" className="form-control" name="username" id="username" defaultValue={this.formatUsername(this.state.profile.name)} required="required" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-12">Email</label>
              <div className="col-md-12">
                <input type="text" className="form-control" name="email" id="email" defaultValue={this.state.profile.email} readOnly="readonly" required="required" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-12">Password</label>
              <div className="col-md-12">
                <input type="password" className="form-control" name="password" id="password" required="required" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-12">Fullname</label>
              <div className="col-md-12">
                <input type="text" className="form-control" name="name" id="name" defaultValue={this.state.profile.name} required="required" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <button className="btn btn-primary" type="submit"><i className="fa fa-sign-in"></i> Register</button>
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
