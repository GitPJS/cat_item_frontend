import React from "react";
import { Grid, Text, Button } from "../elements";

const Header = (props) => {
  
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px" bg="red" >
        <Grid center>
          <Text margin="0px 16px 0px 10%" size="24px" bold>
            고양이 용품 추천
          </Text>
        </Grid>

        <Grid is_flex width="10%">
          <Button width="100%"
            text="로그인"
          ></Button>
          <Button width="100%"
            text="회원가입"
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;