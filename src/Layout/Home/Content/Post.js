import React, { Component } from 'react';

import Loading from 'Layout/Component/Loading';

/*
 * This component use to show single post get from API
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

  dateHuman(strDate){
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    var date = new Date(strDate);
    return date.toLocaleString('en-GB', options);
  }

  render(){
    if(this.state.ready){
      const post = this.state.posts;
      const postsContent = (
        <div className="container-post-blog">
          <div className="container">
            <h5 className="title-post-blog"><strong><a href={'/posts/'+post.id_post}>{post.title}</a></strong></h5>
            <small className="user-post-blog">Posted by: {post.user.username} <br /> At: {this.dateHuman(post.created_at)}</small>
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
