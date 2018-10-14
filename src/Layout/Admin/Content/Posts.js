import React, { Component } from 'react';

import Loading from 'Layout/Component/Loading';

/*
 * This component use to show all post get from API
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
      let n = 0;
      const postsContent = this.state.posts.map((post, i) =>
        <tr key={i}>
          <td><a href={'/posts/'+post.id_post}>{post.title}</a></td>
          <td>{this.dateHuman(post.created_at)}</td>
          <td><a href={'/admin/posts/edit/'+post.id_post} className="btn btn-sm btn-primary"><i className="fa fa-edit"></i></a></td>
          <td><a href={'/admin/posts/delete/'+post.id_post} className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></a></td>
        </tr>
      );
      return (
        <div className="post-blog">
          <div className="container-post-blog">
            <div className="container">
              <a href="/admin/posts/add" className="btn btn-success"><i className="fa fa-plus-circle"></i></a> Add Post
            </div>
          </div>
          <div className="container-post-blog">
            <div className="container">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th width="60%" scope="col">Title</th>
                      <th width="25%" scope="col">Posted</th>
                      <th width="7%" scope="col">Edit</th>
                      <th width="8%" scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {postsContent}
                  </tbody>
                </table>
              </div>
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

export default Posts;
