import React, { Component } from 'react';

import LatestPosts from 'Layout/Home/Navright/LatestPosts';
import Postyear from 'Layout/Home/Navright/Postyear';
import Loading from 'Layout/Component/Loading';

class Navright extends Component {

  constructor(props){
    super(props);
    this.API_URL = process.env.REACT_APP_API_URL;
    this.state = {
      posts: [],
      ready: false
    }
  }

  componentDidMount() {
    this.getApiPosts()
    .then((res) => {
        this.setState({
          posts: res,
          ready: true
        });
      }
    )
    .catch(err => console.log(err));
  }

  getApiPosts = async () => {
    const response = await fetch(this.API_URL + '/posts/latest');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render(){
    if(this.state.ready){
      const postsData = this.state.posts;

      return (
        <div className="navright-blog">
          <div className="clearfix">&nbsp;</div>
          <div className="row nav-right-group-blog">
            <div className="col-sm-12 col-md-12 col-lg-12 col-nav-right-group-blog">
              <div className="container">
                <h5>Latest Posts</h5>
                <LatestPosts posts={postsData} />
              </div>
            </div>
          </div>
          <div className="clearfix">&nbsp;</div>
          <div className="clearfix">&nbsp;</div>
          {/* Post in all year */}
          <Postyear />
          <div className="clearfix">&nbsp;</div>
        </div>
      );
    } else {
      return (
        <Loading />
      );
    }
  }
}

export default Navright;
