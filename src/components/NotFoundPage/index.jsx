import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

function NotFoundPage() {
  const history = useHistory();

  const comebackHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <Typography>Sorry This Page Not Found</Typography> 
    </Container>
  );
}

export default NotFoundPage;
