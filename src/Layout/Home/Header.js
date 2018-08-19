import React, { Component } from 'react';


class Header extends Component {

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
        </ul>
      </div>
    );
  }
}

export default Header;
