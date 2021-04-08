import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

import Post from "./Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const history = useHistory();
  const classes = useStyles();

  const searchForm = () => {
    history.push("/Search");
  };

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
      <Grid spacing={12} container alignItems="center">
        <Button
          variant="contained"
          className={classes.buttonSubmit}
          color="secondary"
          onClick={searchForm}
        >
          Search Items
        </Button>
      </Grid>
      {posts.postMessage.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
