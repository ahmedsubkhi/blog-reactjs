import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Navright from './Navright';


class Homelayout extends Component {

  state = {
    data_posts: null
  }

  componentDidMount() {
    this.callApi()
      .then((res) => {
          this.setState({ data_posts: res });
        }
      )
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/posts');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render(){
    const { data_posts } = this.state;
    console.log(data_posts);

    if(data_posts == null){
      return (
        <h1 className="text-center">
          <br />
          <br />
          <i className="fa fa-spinner fa-spin"></i>
          <br />Loading...
        </h1>
      )
    }

    return (
      <div className="home-layout">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-9 col-lg-9">
              {/* Contains content of article or news */}
              {/*this.renderChildComponent()*/}
              <Content data_posts={data_posts} />
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              {/* Navigation right */}
              <Navright data_posts={data_posts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homelayout;
