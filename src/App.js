import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import SearchForm from "./components/SearchForm";
import NotFoundPage from "./components/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Auth" exact component={Auth} />
        <Route path="/Search" exact component={SearchForm} />
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
