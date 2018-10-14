import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'Layout/Admin/Header';
import Content from 'Layout/Admin/Content';
import AddContent from 'Layout/Admin/AddContent';
import EditContent from 'Layout/Admin/EditContent';
import DeleteContent from 'Layout/Admin/DeleteContent';


class Adminlayout extends Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="home-layout">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <Switch>
                <Route path="/admin/posts/edit/:id" component={EditContent} />
                <Route path="/admin/posts/delete/:id" component={DeleteContent} />
                <Route path="/admin/posts/add" component={AddContent} />
                <Route path="/admin/posts" component={Content} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adminlayout;
