import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Post from "../../Posts/Post";
import { useDispatch, useSelector } from "react-redux";
import { getSearchItems } from "../../../actions/posts";

const Results = ({ posts, isSearchPage, searchValue }) => {
  console.log({ searchValue });
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const FetchData = (searchValue, page = 1) => {
    dispatch(getSearchItems(searchValue.value, page));
  };

  // useEffect(() => {
  //   FetchData();
  // }, [FetchData]);
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="subtitle1" display="block" gutterBottom>
          Result :
          {!posts.length ? `${posts.totalItems} Items Found` : "No Post Found"}
        </Typography>
      </Grid>

      <Grid spacing={3} container justify="space-between">
        {state.posts.getSearchPosts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} isSearchPage={isSearchPage} />
          </Grid>
        ))}
      </Grid>
      <Button
        disabled={state.posts.prevPage < 1 ? true : false}
        onClick={() => FetchData(searchValue, state.posts.prevPage)}
      >
        Previous
      </Button>
      <Button
        disabled={
          state.posts.currentPage === state.posts.totalPage ? true : false
        }
        onClick={() => FetchData(searchValue, state.posts.nextPage)}
      >
        Next
      </Button>
    </>
  );
};
export default Results;
