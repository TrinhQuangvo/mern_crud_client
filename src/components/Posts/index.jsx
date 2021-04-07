import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post";
import useStyles from "./styles";
import Pagination from "../Pagination";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.postMessage ? (
    <div>
      <Paper>
        <Typography gutterBottom>No Post Found!</Typography>
      </Paper>
    </div>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.postMessage.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}

      <Pagination currentPage={posts.currentPage} totalPage={posts.totalPage} />
    </Grid>
  );
};

export default Posts;
