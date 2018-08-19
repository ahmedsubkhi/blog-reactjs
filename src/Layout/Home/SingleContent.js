import React, { Component } from 'react';


class SingleContent extends Component {

  constructor(props){
    super(props);
    console.log(this.props);

    this.state = {
      post_content: null,
      //id_posted:props.match.params.number
    }
  }

  componentDidMount() {
    //console.log(this.props.data_posts);
    if(this.props.data_posts == null){
      this.setState({
        post_content: "Loading..."
      })
    } else {
      const d_post = this.props.data_posts;
      var post_index = d_post.findIndex(p => p.id_post == this.props.match.params.number);
      var post = d_post[post_index];

      this.setState({
        post_content: this.renderPosts(post)
      });
    }
  }

  renderPosts = (post) => {
    const posts = (
      <div className="container-post-blog">
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

export default SingleContent;
