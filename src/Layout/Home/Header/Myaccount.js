import React, { Component } from 'react';


class Myaccount extends Component {

  constructor(props){
    super(props);
  }

  render(){
    if(this.props.myaccount.username){
      const me = this.props.myaccount;
      return (
        <li className="nav-item dropdown">
          <div className="my-account">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">Logged in as ({me.username})</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/admin/posts">Admin</a>
              <a className="dropdown-item" href="/logout">Logout</a>
            </div>
          </div>
        </li>
      );
    } else {
      return ([
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>,
        <li className="nav-item">
          <a className="nav-link" href="/register">Register</a>
        </li>
      ])
    }
  }
}

export default Myaccount;
