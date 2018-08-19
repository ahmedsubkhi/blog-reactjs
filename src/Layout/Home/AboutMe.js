import React, { Component } from 'react';


class AboutMe extends Component {

  render(){
    return (
      <div className="content-blog">
        <div className="post-blog">
          <div className="container-post-blog">
            <div className="container">
              <h5 className="title-post-blog"><strong><a href="/aboutme">About Me</a></strong></h5>
              <div className="body-post-blog">
                <p>
                My name is Akhmad Subkhi. I am an Indonesian. I love coding.
                My first programming language I learn is PHP. I have learned Object Oriented Programming, framework like CodeIgniter and Laravel.
                </p>
                <p>
                Now more focused on JavaScript programming language. Especially at Node JS as backend and React JS as frontend service.
                This blog stack I use is MongoDB, Express JS, React JS, and Node JS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
