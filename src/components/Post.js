import React, { Component } from 'react';


class Post extends Component {
  state = {
   
  }


  render() {
    return (
      <div className="Container">
        <div className="row">
          <div className="col-md-12">
            <h1>{this.props.postData.title}</h1>
            <p className="authorText">{this.props.postData.author}</p>
            <p>{this.props.postData.body}</p>
            <pre style={ { 'background-color': '#33FFFF'}}>{JSON.stringify(this.props.postData)}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
