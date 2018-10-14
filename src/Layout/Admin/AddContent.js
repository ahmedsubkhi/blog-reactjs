import React, { Component } from 'react';

import AddPost from 'Layout/Admin/Content/AddPost';
import Loading from 'Layout/Component/Loading';

class AddContent extends Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="content-blog">
        <AddPost />
      </div>
    );
  }

}

export default AddContent;
