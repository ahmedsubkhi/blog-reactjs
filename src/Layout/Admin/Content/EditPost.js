import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from 'Layout/Component/Loading';

class EditPost extends Component {

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

  doApiUpdatePost = async (data) => {
    const id = this.state.posts._id;
    const response = await fetch(this.API_URL + '/posts/' + id, {
      method: 'post',
      headers: new Headers({
        'x-access-token': this.currentAuth.token
      }),
      body: data
    });
    const result = await response.json();

    if (response.status !== 200) throw JSON.stringify(result);

    return result;
  }

  doSave(e){
    e.preventDefault();

    this.setState({ message: <h4><i className="fa fa-spin fa-spinner"></i></h4> });

    const data = new FormData(e.target);

    this.doApiUpdatePost(data)
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
              <form className="form-horizontal" onSubmit={ this.doSave.bind(this) }>
                <input type="hidden" name="_id" id="_id" value={ post._id } />
                <div className="col-md-12">
                  <div className="form-group">
                    <h5 className="col-md-12 text-center">Edit Post</h5>
                    <hr />
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-12">Title</label>
                    <div className="col-md-12">
                      <input type="text" className="form-control" name="title" id="title" defaultValue={ post.title } />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-12">Body</label>
                    <div className="col-md-12">
                      <textarea className="form-control" rows="8" name="body" id="body" defaultValue={ post.body }></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <button className="btn btn-primary" type="submit"><i className="fa fa-save"></i> Save</button>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <span><a href="/admin/posts"><i className="fa fa-arrow-left"></i> Back</a></span>
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

export default EditPost;
