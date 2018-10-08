import React, { Component } from 'react';

import Myaccount from './Header/Myaccount';

class Header extends Component {

  constructor(){
    super();

    this.API_URL = process.env.REACT_APP_API_URL;

    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    this.currentAuth = JSON.parse(localStorage.getItem(this.CONFIG_SESSION_NAME));

    this.state = {
      ready: false,
      myAccount: []
    }
  }

  componentDidMount() {
    if(this.currentAuth){
      this.getApiMyaccount()
      .then((res) => {
          this.setState({
            myAccount: res,
            ready: true
          });
        }
      )
      .catch(err => console.log(err));
    }
  }

  getApiMyaccount = async () => {
    const response = await fetch(this.API_URL + '/myaccount', {
      method: 'get',
      headers: new Headers({
        'x-access-token': this.currentAuth.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });

    const result = await response.json();

    if (response.status !== 200) throw Error(result.message);

    return result;
  }

  render(){
    return (
      <div className="header-blog">
        <ul className="nav justify-content-center flex-column flex-sm-row">
          <li className="nav-item text-center">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item text-center">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item text-center">
            <a className="nav-link" href="/aboutme">About Me</a>
          </li>
          <li className="nav-item text-center">
            <Myaccount myaccount={this.state.myAccount} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
