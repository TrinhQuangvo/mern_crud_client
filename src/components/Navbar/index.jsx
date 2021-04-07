import {
  AppBar,
  Avatar,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import decode from "jwt-decode";
import image from "./../../images/memories.png";
import useStyle from "./styles";
import { LOGOUT, DARK_MODE } from "./../../constant/actionTypes";
import { DarkMode } from "./../../actions/ui.actions";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile"))); 
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyle();
  const [darkMode, setDarkMode] = useState(false);

  const config = useSelector((state) => state.uiReducer);
  console.log(config);
  const toggleChecked = (e) => {
    setDarkMode((darkMode) => !darkMode);
    dispatch(DarkMode({ type: DARK_MODE, payload: e.target.checked }));
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    dispatch(DarkMode(window.localStorage.getItem("theme")));
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [dispatch]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/auth");
    setUser(null);
  };

  return (
    <AppBar
      className={darkMode ? classes.appBar + " dark" : classes.appBar}
      position="static"
      color="inherit"
    >
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h6"
          align="center"
        >
          CRUD WITH MERN STACK
        </Typography>
        <img className={classes.image} src={image} alt="icon" height="60" />
      </div>

      <Toolbar className={classes.Toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.name}
            </Avatar>
            <Typography className={classes.name} variant="h5">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        )}
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={toggleChecked} />}
            label="Dark Mode"
            labelPlacement="bottom"
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
