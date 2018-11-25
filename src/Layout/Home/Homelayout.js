import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'Layout/Home/Header';
import Content from 'Layout/Home/Content';
import Contact from 'Layout/Home/Contact';
import AboutMe from 'Layout/Home/AboutMe';
import SingleContent from 'Layout/Home/SingleContent';
import Navright from 'Layout/Home/Navright';


class Homelayout extends Component {

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
            <div className="col-sm-9 col-md-9 col-lg-9">
              {/* Contains content of article or news */}
              <Switch>
                <Route exact path="/" component={Content} />
                <Route exact path="/posts" component={Content} />
                <Route path="/contact" component={Contact} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/posts/:id" render={(props) => <SingleContent {...props} />} />
                <Route render={() => { return ( <h3>Not Found</h3> ); } } />
              </Switch>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              {/* Navigation right */}
              <Navright />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homelayout;
