import React, { Component } from 'react';

import Myaccount from 'Layout/Admin/Header/Myaccount';

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
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
          <h1 className="blog-brand d-block d-sm-none"><a className="navbar-brand" href="/"><i className="fa fa-connectdevelop"></i> Subkhi Blog</a></h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/posts">Posts</a>
              </li>
              <li className="nav-item dropdown">
                <Myaccount myaccount={this.state.myAccount} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
