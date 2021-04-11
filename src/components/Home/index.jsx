import React, { useEffect, useState, lazy, Suspense } from "react";
import { Button, Container, Grid, Grow, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import useStyles from "./styles";

//import Posts from "./../Posts";
import Form from "./../Form";
const Posts = lazy(() => import('./../Posts'))
const Home = () => {
  const [currentId, setCurrentId] = useState(0);

  const state = useSelector((state) => state);
  const classes = useStyles();

  const dispatch = useDispatch();

  const FetchData = (page) => {
    dispatch(getPosts(page));
  };
  useEffect(() => {
    FetchData();
  }, [currentId, FetchData]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Suspense fallback={<Typography>Loading...</Typography>}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}></Posts>
            </Grid>
          </Suspense>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
        <div className={classes.wrap}>
          <Button
            disabled={state.posts.prevPage < 1 ? true : false}
            onClick={() => FetchData(state.posts.prevPage)}
          >
            Previous
          </Button>
          <Typography variant="h5" className={classes.PaginationType}>
            Page {state.posts.currentPage} of {state.posts.totalPage}
          </Typography>
          <Button
            disabled={
              state.posts.currentPage === state.posts.totalPage ? true : false
            }
            onClick={() => FetchData(state.posts.nextPage)}
          >
            Next
          </Button>
        </div>
      </Container>
    </Grow>
  );
};

export default Home;
