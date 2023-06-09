import React, { Component } from "react";
import { Route } from "react-router-dom";

import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import classes from "./Posts.css";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((res) => {
        const postsData = res.data.slice(75, 79);
        const updateDataPosts = postsData.map((post) => {
          return { ...post, author: "Mahmoud" };
        });
        this.setState({ posts: updateDataPosts });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.props.history.push({ pathname: "/posts/" + id });
  };

  render() {
    let posts = (
      <p style={{ alignItems: "center", fontWeight: "bold", color: "red" }}>
        Something Wrong..!
      </p>
    );

    if (!this.state.error) {
      posts = this.state.posts.map((el) => {
        return (
          // <Link to={"/posts/" + el.id}>
          <Post
            key={el.id}
            title={el.title}
            author={el.author}
            clicked={() => this.postSelectedHandler(el.id)}
          />
          // </Link>
        );
      });
    }
    return (
      <div>
        <section className={classes.Posts}>{posts}</section>
        <Route path={this.props.match.url + "/:id"} component={FullPost} />
      </div>
    );
  }
}

export default Posts;
