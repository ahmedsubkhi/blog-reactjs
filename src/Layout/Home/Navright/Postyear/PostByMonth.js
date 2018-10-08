import React, { Component } from 'react';

import Loading from '../../Loading';

class PostByMonth extends Component {

  constructor(props){
    super(props);
  }

  render(){
    if(this.props.posts != null){
      const res = this.props.posts;
      const posts = res.map((post, n) =>
        post.map((data, p) =>
          <div className="anchor-month" key={p}>
            <a href={'/posts/' + data.id_post}><b className="fa fa-caret-right"></b> {data.title}</a>
          </div>
        )
      );
      return (
        <div className="post-post-by-month">
          {posts}
        </div>
      );
    } else {
      return (
        <Loading />
      )
    }
  }
}

export default PostByMonth;
