import React, { Component } from 'react';

import EditPost from 'Layout/Admin/Content/EditPost';
import Loading from 'Layout/Component/Loading';

class EditContent extends Component {

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
    const response = await fetch(this.API_URL + '/posts/admin/' + id_post);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render(){
    if(this.state.ready){
      const postsData = this.state.posts;

      return (
        <div className="content-blog">
          <EditPost posts={postsData} />
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

export default EditContent;
