import React, { Component } from 'react';

import Loading from '../Loading';

/*
 * This component use to show all post get from API
 */
class LatestPosts extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: [],
      ready: false
    };
  }

  componentDidMount() {
    if(this.props.posts == null){
      this.setState({
        ready: false
      })
    } else {
      this.setState({
        posts: this.props.posts,
        ready: true
      });
    }
  }

  render(){
    if(this.state.ready){
      const postsContent = this.state.posts.map((post, i) =>
        <div className="container-item-nav-right-blog" key={i}>
          <div className="title-item-nav-right-blog">
            <a href={'/posts/'+post.id_post}>{post.title}</a><br />
            <small className="user-item-nav-right-blog">Posted by: {post.user.username}</small>
          </div>
        </div>
      );
      return (
        <div className="post-blog">
          {postsContent}
        </div>
      );
    } else {
      return (
        <Loading />
      )
    }
  }
}

export default LatestPosts;
