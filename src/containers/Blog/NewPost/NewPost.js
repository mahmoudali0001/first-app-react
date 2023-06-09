import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import classes from "./NewPost.css";
import axios from "axios";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Mahmoud",
    submitted: false,
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    axios.post("/posts", data).then((res) => {
      console.log(res);
      this.props.history.replace("/posts");
    });
    console.log(this.props);
  };

  render() {
    let redirect = null;

    if (this.state.submitted) {
      redirect = <Redirect to="/posts" />;
    }

    return (
      <div className={classes.NewPost}>
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Mahmoud">Mahmoud</option>
          <option value="Ali">ALi</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
