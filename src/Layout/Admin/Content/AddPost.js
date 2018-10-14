import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from 'Layout/Component/Loading';

class AddPost extends Component {

  constructor(){
    super();

    this.API_URL = process.env.REACT_APP_API_URL;

    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    this.currentAuth = JSON.parse(localStorage.getItem(this.CONFIG_SESSION_NAME));

    this.state = {
      message: "",
      redirect: false
    }
  }

  doApiCreatePost = async (data) => {
    const response = await fetch(this.API_URL + '/posts', {
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

    this.doApiCreatePost(data)
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
    return (
      <div className="post-blog">
        <div className="container-post-blog">
          <div className="container">
            {this.renderRedirect()}
            <form className="form-horizontal" onSubmit={ this.doSave.bind(this) }>
              <div className="col-md-12">
                <div className="form-group">
                  <h5 className="col-md-12 text-center">Add Post</h5>
                  <hr />
                </div>
                <div className="form-group">
                  <label className="control-label col-md-12">Title</label>
                  <div className="col-md-12">
                    <input type="text" className="form-control" name="title" id="title" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-md-12">Body</label>
                  <div className="col-md-12">
                    <textarea className="form-control" rows="8" name="body" id="body"></textarea>
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
  }
}

export default AddPost;
