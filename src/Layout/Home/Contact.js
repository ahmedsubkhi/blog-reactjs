import React, { Component } from 'react';


class Contact extends Component {

  render(){
    return (
      <div className="content-blog">
        <div className="post-blog">
          <div className="container-post-blog">
            <div className="container">
              <h5 className="title-post-blog"><strong><a href="/contact">Contact</a></strong></h5>
              <div className="body-post-blog">
                You can contact me below, <br />
                <i className="fa fa-envelope"></i> Email : <a href="mailto:ahmed.subkhi@gmail.com">ahmed.subkhi@gmail.com</a> <br />
                <i className="fa fa-github"></i> Github : <a href="https://github.com/ahmedsubkhi">ahmedsubkhi</a> <br />
                <i className="fa fa-linkedin"></i> LinkedIn : <a href="https://www.linkedin.com/in/ahmedsubkhi">Akhmad Subkhi</a> <br />
                <i className="fa fa-twitter"></i> Twitter : <a href="https://twitter.com/ahmed_subkhi">@ahmed_subkhi</a> <br />
                <i className="fa fa-facebook"></i> Facebook : <a href="https://www.facebook.com/ahmed.subkhi">Ahmed Subkhi</a> <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
