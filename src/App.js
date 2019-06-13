import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPost } from "./actions/postAction";

class App extends Component {
  state = {
    isPrevBtnActive: true,
    isNextBtnActive: false
  };

  componentDidMount() {
    this.props.fetchAllPost();
  }

  handlePrevBtn = () => {
    this.setState({
      isPrevBtnActive: true,
      isNextBtnActive: false
    });
  };

  handleNextBtn = () => {
    this.setState({
      isPrevBtnActive: false,
      isNextBtnActive: true
    });
  };

  render() {
    const { isNextBtnActive, isPrevBtnActive } = this.state;
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
          <div>
            <div style={{ padding: 25 }}>
              <h3>POSTS TITLE</h3>
              {posts.data.map((post, i) => {
                if (isPrevBtnActive && i <= 49) {
                  return (
                    <div>
                      <p key={i}>
                        {i + 1}. {post.title}
                      </p>
                    </div>
                  );
                }
                if (isNextBtnActive && i > 49) {
                  return (
                    <div>
                      <p key={i}>
                        {i + 1}. {post.title}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div style={{ textAlign: "center", marginBottom: 10 }}>
              <button
                style={{ display: "inline-block" }}
                onClick={this.handlePrevBtn}
              >
                Prev
              </button>
              <button
                style={{ display: "inline-block" }}
                onClick={this.handleNextBtn}
              >
                Next
              </button>
            </div>
          </div>
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
