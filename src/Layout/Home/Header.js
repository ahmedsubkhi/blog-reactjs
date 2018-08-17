import React, { Component } from 'react';


class Header extends Component {

  render(){
    return (
      <div className="header-blog">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/article">Article</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/aboutme">About Me</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
