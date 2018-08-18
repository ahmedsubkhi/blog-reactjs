import React, { Component } from 'react';


class Navright extends Component {

  constructor(props){
    super(props);
    console.log(this.props.data_posts);
  }

  state = {
    post_content: null
  }

  componentDidMount() {
    console.log(this.props.data_posts);
    if(this.props.data_posts == null){
      this.setState({
        post_content: "Loading..."
      })
    } else {
      const d_post = this.props.data_posts;
      this.setState({
        post_content: this.renderItems(d_post)
      });
    }
  }

  renderItems = (res) => {
    const posts = res.map((post) =>
      <div className="container-item-nav-right-blog">
        <div className="title-item-nav-right-blog">
          <a href={'/posts/'+post.id_post}>{post.title}</a><br />
          <small className="user-item-nav-right-blog">Posted by: {post.user.username}</small>
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
      <div className="navright-blog">
        <div className="row nav-right-group-blog">
          <div className="col-sm-12 col-md-12 col-lg-12 col-nav-right-group-blog">
            <div className="container">
              <h5>Latest</h5>
              {this.state.post_content}
            </div>
          </div>
        </div>
        <div className="clearfix">&nbsp;</div>
        <div className="clearfix">&nbsp;</div>
        <div className="clearfix">&nbsp;</div>
        <div className="row nav-right-group-blog">
          <div className="col-sm-12 col-md-12 col-lg-12 col-nav-right-group-blog">
            <div className="container">
              <h5>Post by Date</h5>
              {this.state.post_content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navright;
