import React from "react"

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
// import Header from "../components/Header";
import { history } from "../redux/configureStore";
import { Grid } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {
  const dispatch = useDispatch();

  
  const is_session = localStorage.getItem("token") ? true : false;

  React.useEffect(() => {
    console.log(is_session)
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid>
      <ConnectedRouter history={history}>
          {/* <Header></Header> */}
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Signup} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/write/:id" exact component={PostWrite} />
          <Route path="/post/:id" exact component={PostDetail} />
      </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
