import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as postActions } from "../redux/modules/post";
//   게시글 수정과 작성을 이 컴포넌트 하나로 할거예요.
const PostWrite = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const [contents, setContents] = React.useState("");


const changeContents = (e) => {
  setContents(e.target.value)
}

const addPost = () => {
  dispatch(postActions.addPostMiddleware(contents))
}

  return (
    <React.Fragment>
    <Grid width="70%" margin="auto">
      <Grid padding="16px" center>
        <Text margin="0px" size="36px" bold>
          게시글 등록
        </Text>
      </Grid>

      <Grid is_flex >
        <Grid>
            <Image src={preview ? preview : "http://via.placeholder.com/400x300"}/>
        </Grid>
        <Grid margin="0px 0px 0px 60px">
            <Upload />
        </Grid>
      </Grid>

      <Grid padding="16px">
        <Input value={contents} label="게시글 내용" placeholder="게시글 작성" multiLine _onChange={changeContents} />
      </Grid>
      <Grid padding="16px" center>
        <Button width="20%" _onClick={addPost}>게시글 작성</Button>
      </Grid>
    </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
