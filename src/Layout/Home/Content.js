import React, { Component } from 'react';


class Content extends Component {
  state = {
    post_content: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res =>
        this.setState({ post_content: this.renderPosts(res) })
      )
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/posts');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  renderPosts = (res) => {
    const posts = res.map((post) =>
      <div class="container container-post-blog">
        <h5 class="title-post-blog"><strong><a href={'/posts/'+post.id_post}>{post.title}</a></strong></h5>
        <small class="user-post-blog">Posted by: {post.user.username}</small>
        <div class="body-post-blog">
          {post.body}
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
