import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';


class Homelayout extends Component {

  render(){
    return (
      <div className="home-layout">
        <div className="header-wrapper">
          <Header />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-9 col-lg-9">
              {/* Berisi berita */}
              <Content />
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <span>Navigation</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homelayout;
