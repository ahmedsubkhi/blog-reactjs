import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Adminlayout from 'Layout/Admin/Adminlayout';


class AdminPosts extends Component {

  constructor(){
    super();

    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    this.currentAuth = JSON.parse(localStorage.getItem(this.CONFIG_SESSION_NAME));

    this.state = {
      redirect: false
    }

  }

  render(){
    if(!this.currentAuth){
      return <Redirect to='/login' />
    } else {
      if(!this.currentAuth.token){
        return <Redirect to='/login' />
      }
    }
    return (
      <div>
        <Adminlayout />
      </div>
    );
  }
}

export default AdminPosts;
