import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NewComment extends Component {

  constructor(props){
    super(props);

    this.API_URL = process.env.REACT_APP_API_URL;

    this.CONFIG_SESSION_NAME = process.env.REACT_APP_CONFIG_SESSION_NAME;

    this.currentAuth = JSON.parse(localStorage.getItem(this.CONFIG_SESSION_NAME));

    this.state = {
      myAccount: [],
      ready: false,
      message: ""
    }

    this.id = this.props.match.params.id;
  }

  componentDidMount() {
    if(this.currentAuth){
      this.getApiMyaccount()
      .then((res) => {
          this.setState({
            myAccount: res,
            ready: true
          });
        }
      )
      .catch(err => console.log(err));
    }
  }

  postApiPostAddComment = async (data) => {
    const id_post = this.id;
    const response = await fetch(this.API_URL + '/posts/' + id_post + '/addcomment', {
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

  getApiMyaccount = async () => {
    const response = await fetch(this.API_URL + '/myaccount', {
      method: 'get',
      headers: new Headers({
        'x-access-token': this.currentAuth.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });

    const result = await response.json();

    if (response.status !== 200) throw Error(result.message);

    return result;
  }

  doSaveComment(e){
    e.preventDefault();

    this.setState({ message: <h4><i className="fa fa-spin fa-spinner"></i></h4> });

    const data = new FormData(e.target);

    var body = this.refs.body;
    this.postApiPostAddComment(data)
    .then((res) => {
        this.setState({
          message: ""
        });
        body.value = "";
        this.props.handleForUpdate(res.newdata);
      }
    )
    .catch(err =>
      this.setState({ message: err })
    );
  }

  render(){
    if(this.state.ready){
      const _id = this.props.posts._id;

      if(this.state.myAccount){
        return (
          <div className="form-comment container-new-comment-post">
            <form className="form-horizontal" onSubmit={ this.doSaveComment.bind(this) }>
              <div className="">
                <div className="form-group">
                  <label className="control-label col-md-12">New Comment :</label>
                  <div className="col-md-12">
                    <input type="hidden" name="_id" id="_id" defaultValue={ _id } />
                    <textarea className="form-control" id="body" name="body" ref="body"></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <button className="btn btn-success" type="submit"><i className="fa fa-comments"></i> Post Comment</button>
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
        );
      } else {
        return(
          <div className="container-new-comment-post">
            Please login to post a comment !
          </div>
        );
      }
    } else {
      return(
        <div className="container-new-comment-post">
          Please login to post a comment !
        </div>
      );
    }
  }
}

export default NewComment;
