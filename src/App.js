import React, { Component } from 'react';
import axios from 'axios';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import style from './styles/style.css';



class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('/api/posts')
      .then((response) => {
        console.log(response.data);
        this.setState({ posts: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleNewPostSubmit = (event) => {
    event.preventDefault();
    axios.post('api/posts', {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]:value
    });
  };

  render() {
    return (
      <div className="App">
        <CreatePost onSubmit={ this.handleNewPostSubmit } onChange={this.handleInputChange}/>
        <hr />
        {this.state.posts.map((post) => {
          return (
            <Post postData={post}/>
          )
        })}
      </div>
    );
  }
}

export default App;
