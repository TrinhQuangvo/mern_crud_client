import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import LockOutLinedIcon from "@material-ui/icons/LockOpenOutlined";
import { useDispatch } from "react-redux";
import { AUTH } from "./../../constant/actionTypes";

import { GoogleLogin } from "react-google-login";
import { signin, signup } from "../../actions/auth";
import Icon from "./Icon";
import Input from "./input";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  var user = localStorage.getItem("profile");
  const dispatch = useDispatch();

  const [isSignup, setisSignup] = useState(false);
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setisSignup((prev) => !prev);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try again later");
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId; 

    try {
      dispatch({ type: AUTH, data: { result: result, token: token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (user !== null) {
    return <h1>You're Already Loged In!</h1>;
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignup ? "Sign In" : "Sign Up"}
            </Button>
            <GoogleLogin
              xs={12}
              clientId="846342500950-m7n4b178bsvs23lr6t4pa52m03qkiqr0.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                >
                  Google Signin
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
            />
            <Grid container justify="center">
              <Grid>
                <Button onClick={switchMode}>
                  {isSignup
                    ? "Already Have An Account ? Sign In Now "
                    : "Don't Have an Account ? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
