import React, { Component } from 'react';

import Loading from '../Loading';


class Myaccount extends Component {

  constructor(props){
    super(props);
  }

  render(){
    if(this.props.myaccount.username){
      const me = this.props.myaccount;
      return (
        <div className="my-account">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">Logged in as ({me.username})</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/logout">Logout</a>
          </div>
        </div>
      );
    } else {
      return (
        <a className="nav-link" href="/login">Login</a>
      )
    }
  }
}

export default Myaccount;
