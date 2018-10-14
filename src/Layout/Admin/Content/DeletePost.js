import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from 'Layout/Component/Loading';

class DeletePost extends Component {

  constructor(props){
    super(props);

    this.state = {
      message: "",
      redirect: false,
      posts: [],
      ready: false
    };

    this.API_URL = process.env.REACT_APP_API_URL;

    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    this.currentAuth = JSON.parse(localStorage.getItem(this.CONFIG_SESSION_NAME));
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

  doApiDeletePost = async () => {
    const id = this.state.posts._id;
    const response = await fetch(this.API_URL + '/posts/' + id, {
      method: 'delete',
      headers: new Headers({
        'x-access-token': this.currentAuth.token
      })
    });
    const result = await response.json();

    if (response.status !== 200) throw JSON.stringify(result);

    return result;
  }

  doDelete(e){
    e.preventDefault();

    this.setState({ message: <h4><i className="fa fa-spin fa-spinner"></i></h4> });

    const data = new FormData(e.target);

    this.doApiDeletePost()
    .then((res) => {
        this.setState({ redirect: true });
      }
    )
    .catch(err =>
      this.setState({ message: err })
    );
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/admin/posts' />
    }
  }

  render(){
    if(this.state.ready){
      var post = this.state.posts;

      return (
        <div className="post-blog">
          <div className="container-post-blog">
            <div className="container">
              { this.renderRedirect() }
              <form className="form-horizontal" onSubmit={ this.doDelete.bind(this) }>
                <div className="col-md-12">
                  <div className="form-group">
                    <h5 className="col-md-12 text-center">Delete Post</h5>
                    <hr />
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      Delete <strong><a href={'/posts/'+post.id_post}>{ post.title }</a></strong> ?
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <button className="btn btn-primary" type="submit"><i className="fa fa-trash"></i> Delete</button>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <span><a href="/admin/posts"><i className="fa fa-arrow-left"></i> Cancel</a></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="text-danger">{this.state.message}</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Loading />
      )
    }
  }
}

export default DeletePost;
