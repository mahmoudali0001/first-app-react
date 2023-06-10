import React, { Component, Suspense } from "react";
// import axios from "axios";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import classes from "./Blog.css";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import NotFound404 from "../../components/NotFound404/NotFound404";
// import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = React.lazy(() => import("./NewPost/NewPost"));

class Blog extends Component {
  state = {
    auth: true,
  };

  render() {
    console.log(AsyncNewPost);

    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact activeClassName={classes.activeBtn}>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                  activeClassName={classes.activeBtn}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route
              path="/new-post"
              render={() => (
                <Suspense fallback={<div>Loading.....!</div>}>
                  <AsyncNewPost />
                </Suspense>
              )}
            />
          ) : null}
          <Route path="/posts" component={Posts} />

          <Route component={NotFound404} />

          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
