import React, { Component } from 'react';


class Content extends Component {

  constructor(props){
    super(props);
    console.log(this.props);
  }

  state = {
    post_content: null
  }

  componentDidMount() {
    //console.log(this.props.data_posts);
    if(this.props.data_posts == null){
      this.setState({
        post_content: "Loading..."
      })
    } else {
      const d_post = this.props.data_posts;
      this.setState({
        post_content: this.renderPosts(d_post)
      });
    }
  }

  renderPosts = (res) => {
    const posts = res.map((post, i) =>
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
        {posts}
      </div>
    );
  }

  render(){
    return (
      <div className="content-blog">
        <span>{this.state.post_content}</span>
      </div>
    );
  }
}

export default Content;
