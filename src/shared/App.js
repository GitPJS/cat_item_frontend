import './App.css';
import React from "react"

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Header from "../components/Header";
import { history } from "../redux/configureStore";
import { Grid, Button } from "../elements";

function App() {
  return (
    <React.Fragment>
      <Grid>
      
      <ConnectedRouter history={history}>
          <Header></Header>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/write/:id" exact component={PostWrite} />
          <Route path="/post/:id" exact component={PostDetail} />
      </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
