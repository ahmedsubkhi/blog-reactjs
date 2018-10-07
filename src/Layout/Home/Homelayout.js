import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import Contact from './Contact';
import AboutMe from './AboutMe';
import SingleContent from './SingleContent';
import Navright from './Navright';


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
                <Route path="/contact" component={Contact} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/posts/:number" render={(props) => <SingleContent {...props} />} />
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
