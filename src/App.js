import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import image from "./images/memories.png";
import * as Components from "./components";
import useStyle from "./styles";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [currentId, dispatch]);

  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">
          Memories
          <img
            src={image}
            className={classes.image}
            alt="memories"
            height="60"
          />
        </Typography>
      </AppBar>
      <Grid>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Components.Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Components.Form
                setCurrentId={setCurrentId}
                currentId={currentId}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
}

export default App;
