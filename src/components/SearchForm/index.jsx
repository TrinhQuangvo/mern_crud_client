import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";

import useStyle from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { getSearchItems } from "./../../actions/posts";
import Results from "./Result";
const SearchForm = () => {
  const [query, setQuery] = useState("");
  const classes = useStyle();
  const [currentId, setCurrentId] = useState(0);
  const isSearchPage = true;

  const state = useSelector((state) => state);
  console.log(state.posts.getSearchPosts);

  const dispatch = useDispatch();

  const FetchSearchData = (query, page) => {
    dispatch(getSearchItems(query, page));
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery((prevData) => {
      return { ...prevData, value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    FetchSearchData(query.value, 1);
  };

  // useEffect(() => {
  //   //thứ tự chạy render -> useEffect -> gọi hàm FetchSearchData() 2 lần 1 lần khi giá trị rỗng khi component và 1 lần sau khi submit (unmouting <3) :D
  //   FetchSearchData("", 1);
  // }, []);

  if (!onSubmit) {
    return;
  }
  return (
    <Container>
      <Grid item xs={12}>
        <form
          onSubmit={onSubmit}
          className={classes.root}
          noValidate
          autoComplete="on"
        >
          <TextField
            fullWidth
            variant="outlined"
            id="standard-basic"
            label="Search"
            onChange={handleChange}
            placeholder="take the hammer and hit the keyboard so fucking hard to find whatever you want!"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Grid container item xs={12} justify="center">
            {state.posts.getSearchPosts && (
              <Results
                posts={state.posts}
                setCurrentId={setCurrentId}
                isSearchPage={isSearchPage}
                searchValue={query}
              />
            )}
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default SearchForm;
