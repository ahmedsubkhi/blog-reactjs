import React, { Component } from 'react';

import Loading from 'Layout/Component/Loading';
import PostByMonth from 'Layout/Home/Navright/Postyear/PostByMonth';

class Postyear extends Component {

  constructor(props){
    super(props);
    this.API_URL = process.env.REACT_APP_API_URL;

    this.months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    this.state = {
      ready: false,
      postYear: [],
      postByMonth: []
    }
  }

  componentDidMount() {
    this.getApiPostsYear()
    .then((res) => {
        var newItems = [...this.state.postByMonth];
        res.map((postMonth, p) => {
          const year = postMonth._id.year;
          const month = postMonth._id.month;
          newItems[p] = [];
        });
        this.setState({
          postByMonth:newItems,
          postYear: res,
          ready: true
        });
      }
    )
    .catch(err => console.log(err));
  }

  getApiPostsYear = async () => {
    const response = await fetch(this.API_URL + '/posts/year');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  getApiPostsByMonth = async (year, month) => {
    const response = await fetch(this.API_URL + '/posts/bymonth/' + year + '/' + month);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  getPostByMonth(val, y){
    const year = val._id.year;
    const month = val._id.month;
    this.getApiPostsByMonth(year, month)
    .then((res) => {
        const newItems = [...this.state.postByMonth];
        newItems[y] = [res];
        this.setState({ postByMonth: newItems });
      }
    )
    .catch(err => console.log(err));
  }

  renderPostYear = (res) => {
    const years = res.map((datayear, y) =>
      <div className="container-item nav-right-blog post-year" key={y}>
        <div className="title-item">
          <a href="javascript:void(0);" onClick={() => this.getPostByMonth(datayear, y)}><b className="fa fa-chevron-circle-right"></b> {this.months[datayear._id.month - 1]} {datayear._id.year}</a><br />
        </div>
        <div className="content-item-post-year">
          <PostByMonth posts={this.state.postByMonth[y]} key={y} />
        </div>
      </div>
    );
    return (
      <div className="post-blog">
        {years}
      </div>
    );
  }

  render(){
    if(this.state.ready){
      const postYearContent = this.renderPostYear(this.state.postYear);
      return (
        <div className="row nav-right-group-blog">
          <div className="col-sm-12 col-md-12 col-lg-12 col-nav-right-group-blog">
            <div className="container">
              <h5>Post by Month</h5>
              {postYearContent}
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

export default Postyear;
