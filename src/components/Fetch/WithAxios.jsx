import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CustomNavbar from '../Navbar/Navbar';

class Post extends Component {
  render() {
    const { title } = this.props;
    return <h5>{title}</h5>;
  }
}

class Home extends Component {
  state = {
    posts: [],
  };

  fetchData() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <CustomNavbar />

        <div style={{ margin: 200 }}>
          <button
            onClick={() => {
              this.fetchData();
            }}
          >
            fetch
          </button>
          {posts.map((data) => (
            <Post title={data?.title} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Home;
