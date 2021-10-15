import React from "react";
import { Grid, Text, Button } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Header = (props) => {
  const dispatch = useDispatch();

  
  
  const is_login = useSelector((state) => state.user.is_login);

  React.useEffect(()=>{
    console.log(is_login)
  },[])

  if (is_login) {
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px" bg="#71caf0" >
        <Grid center>
          <Text margin="0px 16px 0px 10%" size="24px" bold color="white">
            고양이 용품 추천
          </Text>
        </Grid>

        <Grid is_flex>
            <Button
              _onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            >
              로그아웃
            </Button>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}
return (
  <React.Fragment>
    <Grid is_flex padding="4px 16px" bg="#71caf0" >
      <Grid center>
        <Text margin="0px 16px 0px 10%" size="24px" bold color="white">
          고양이 용품 추천
        </Text>
      </Grid>

      <Grid is_flex width="200px">
        <Button width="100%"
          text="로그인" bg="#31b051" _onClick={() => {
            history.push("/login");
          }}
        ></Button>
        <Button width="100%" margin="0px 0px 0px 10px"
          text="회원가입" bg="#b03192" _onClick={() => {
            history.push("/register");
          }}
        ></Button>
      </Grid>
    </Grid>
  </React.Fragment>
);



};

Header.defaultProps = {};

export default Header;