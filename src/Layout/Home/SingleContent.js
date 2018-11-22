import React, { Component } from 'react';

import Post from 'Layout/Home/Content/Post';
import Loading from 'Layout/Component/Loading';


class SingleContent extends Component {

  constructor(props){
    super(props);
    this.API_URL = process.env.REACT_APP_API_URL;
    this.state = {
      posts: [],
      ready: false,
      notfound: false
    }
  }

  componentDidMount() {

    this.getApiPosts()
    .then((res) => {
        console.log(res);
        if(res){
          this.setState({
            posts: res,
            ready: true
          });
        } else {
          this.setState({
            notfound: true
          });
        }
      }
    )
    .catch(err => console.log(err));

  }

  getApiPosts = async () => {
    const id_post = this.props.match.params.id;
    const response = await fetch(this.API_URL + '/posts/' + id_post);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  renderComments() {
    const comments = this.state.posts.comments;

    return comments.map((comment, i) =>
      <div className="container-comment-post" key={i}>
        <div className="container">
          <small className="user-comment-post text-danger">Commented by: {comment.id_user} <br /> At: {this.dateHuman(comment.created_at)}</small>
          <div className="body-comment-post">
            {comment.body}
          </div>
        </div>
      </div>
    );
  }

  dateHuman(strDate){
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    var date = new Date(strDate);
    return date.toLocaleString('en-GB', options);
  }

  render(){
    if(this.state.ready){
      const postsData = this.state.posts;
      const renderComments = this.renderComments();

      return (
        <div className="content-blog">
          <Post posts={postsData} />
          <div className="comments">
            {renderComments}
          </div>
        </div>
      );
    } else {
      if(this.state.notfound){
        return (
          <h3>Not Found</h3>
        );
      } else {
        return (
          <Loading />
        );
      }
    }
  }
}

export default SingleContent;
