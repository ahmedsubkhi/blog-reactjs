import React, { Component } from 'react';

import Loading from '../Loading';

/*
 * This component use to show all post get from API
 */
class Posts extends Component {

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
        <div className="container-post-blog" key={i}>
          <div className="container">
            <h5 className="title-post-blog"><strong><a href={'/posts/'+post.id_post}>{post.title}</a></strong></h5>
            <small className="user-post-blog">Posted by: {post.user.username}</small>
            <div className="body-post-blog">
              {post.body}
            </div>
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

export default Posts;