import React from "react";
import { Grid, Text, Button } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import '../shared/App.css';


const Header = (props) => {
  const dispatch = useDispatch();

  
  
  const is_login = useSelector((state) => state.user.is_login);

  React.useEffect(()=>{
    
  },[])

  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex padding="16px" position="relative">

            {/*상단*/}
            <div className="background" style={{
              width: "100%",
              display: "flex"
            }}>

              <div style={{
                width: "100%",
                marginLeft: "690px"
              }}>
                <p style={{
                  color: "black"}}>아이들 장난감 후기를 들려주세요!</p>

                <Text bold size="30px" margin="auto">
                  고양이 용품 후기<br/>
                </Text>
              
                <Button
                  position= "absolute" 
                  width="100px"
                  variant="outline-dark"
                  text="로그아웃" 
                  _onClick={() => {
                    dispatch(userActions.logoutFB());
                  }}
                >
                  로그아웃
                </Button>
              </div>
            </div>
          </Grid>

      </React.Fragment>
    );
}
    return (
      <React.Fragment>
        <Grid is_flex padding="16px" position="relative">

            {/*상단*/}
            <div className="background" style={{
              width: "100%",
              display: "flex"
            }}>

              <div style={{
                width: "100%",
                marginLeft: "690px"
              }}>
                <p style={{
                  color: "black"}}>아이들 장난감 후기를 들려주세요!</p>

                <Text bold size="30px" margin="auto">
                  고양이 용품 후기<br/>
                  작성하러가기
                </Text>
              
                {/* 로그인 */}
                <Button 
                position= "absolute" 
                width="100px"
                variant="outline-dark"
                text="로그인" 
                _onClick={() => {
                history.push("/login");
                }}
              >
              </Button>

              {/* 회원가입 */}
              <Button 
                position= "absolute"
                width="100px"
                variant="outline-dark"
                text="회원가입" 
                _onClick={() => {
                history.push("/register");
                }}
                margin="1em"
              >
              </Button>
              </div>
            </div>

            

            

          {/* <Grid is_flex width="200px" style={{ */}
            
          {/* }}> */}
          

            {/* 상수님 코드 */}
            {/* <Button width="100%"
              text="로그인" bg="#31b051" _onClick={() => {
                history.push("/login");
              }}
            ></Button> */}

            {/* <Button width="100%" margin="0px 0px 0px 10px"
              text="회원가입" bg="#b03192" _onClick={() => {
                history.push("/register");
              }}
            ></Button> */}

          {/* </Grid> */}

        </Grid>
      </React.Fragment>
    );



    };

Header.defaultProps = {};

export default Header;