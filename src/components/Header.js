import React from "react";
import { Grid, Text, Button } from "../elements";

const Header = (props) => {
  
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
            text="로그인" bg="#31b051"
          ></Button>
          <Button width="100%" margin="0px 0px 0px 10px"
            text="회원가입" bg="#b03192"
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;