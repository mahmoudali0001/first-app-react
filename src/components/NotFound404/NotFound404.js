import React from "react";

import classes from "./NotFound404.css";
import { NavLink } from "react-router-dom";

const notFound404 = (props) => (
  <div className={classes.NotFound404}>
    <h1>This Url Is Not Found...!</h1>

    <button>
      <NavLink to="/posts">Back</NavLink>
    </button>
  </div>
);

export default notFound404;
