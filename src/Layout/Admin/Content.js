import React, { Component } from 'react';

import Posts from 'Layout/Admin/Content/Posts';
import Loading from 'Layout/Component/Loading';

class Content extends Component {

  constructor(){
    super();
    this.API_URL = process.env.REACT_APP_API_URL;

    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    this.currentAuth = JSON.parse(localStorage.getItem(this.CONFIG_SESSION_NAME));

    this.state = {
      posts: [],
      ready: 0
    }
  }

  componentDidMount() {
    this.getApiPosts()
    .then((res) => {
        this.setState({
          posts: res,
          ready: 1
        });
      }
    )
    .catch(err => {
      console.log(err);
      this.setState({ ready: 2 });
    });
  }

  getApiPosts = async () => {
    const response = await fetch(this.API_URL + '/posts/admin/posts', {
      method: 'get',
      headers: new Headers({
        'x-access-token': this.currentAuth.token
      })
    });

    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render(){
    if(this.state.ready == 1){
      const postsData = this.state.posts;

      return (
        <div className="content-blog">
          <Posts posts={postsData} />
        </div>
      );
    } else if(this.state.ready == 2) {
      return (
        <div className="content-blog">
          <h5>Not allowed group</h5>
        </div>
      )
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default Content;
