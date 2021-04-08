import React from "react";
import {
  Container,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
  Typography,
} from "@material-ui/core";

import useStyle from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";  
const SearchForm = () => {
  const classes = useStyle();
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();
  return (
    <Container>
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="on">
          <TextField
            fullWidth
            variant="outlined"
            id="standard-basic"
            label="Search"
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
        </form>
      </Grid> 
      <Grid item xs={12}>
      <Typography variant="subtitle1" display="block" gutterBottom>
        Result :  2 Items Found .
      </Typography> 
      </Grid>
    </Container>
  );
};

export default SearchForm;
