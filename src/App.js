import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPost } from "./actions/postAction";

class App extends Component {
  componentDidMount() {
    this.props.fetchAllPost();
  }

  render() {
    const { posts } = this.props;
    if (!posts.isFetched) {
      return (
        <div>
          <p>Loading..</p>
        </div>
      );
    }
    return (
      <div>
        {posts.data.length > 0 ? (
          <ul>
            {posts.data.map((post, i) => {
              return <li key={i}>{post.title}</li>;
            })}
          </ul>
        ) : (
          <p>There is no post</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = {
  fetchAllPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
