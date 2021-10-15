import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as postActions } from "../redux/modules/post";
import Upload from "../shared/Upload";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);
  const post_id = props.match.params.id;

  const is_edit = post_id ? true : false;
  const _post = is_edit ? post_list.find((p) => p.postId.toString() === post_id): null;
  const [contents, setContents] = React.useState(_post ? _post.content : "");
  const [title, setTitle] = React.useState("");
  const { history } = props;

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeContents = (e) => {
    setContents(e.target.value)
  }

  const addPost = () => {

    dispatch(postActions.addPostMiddleware(contents,title))
  }

  const editPost = () => {
    dispatch(postActions.editPostMiddleware(post_id,contents,title))
  }

  React.useEffect(() => {

    if (is_edit && !_post) {
      window.alert("포스트 정보가 없어요!");
      history.goBack();

      return;
    }
    // 수정모드라면?
    // 이미지 미리보기도 하나 넣어줘야죠!
    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image));
    }
  }, []);

  return (
    <React.Fragment>
    <Grid width="70%" margin="auto">
      <Grid padding="16px" center>
        <Text margin="0px" size="36px" bold>
          {is_edit?"게시글 수정":"게시글 작성"}
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

      <Grid>
        <Text>게시글 제목</Text>
        <input value={title} onChange={changeTitle}/>
      </Grid>

      <Grid padding="16px">
        <Input value={contents} label="게시글 내용" placeholder="게시글 작성" multiLine _onChange={changeContents} />
      </Grid>
      <Grid padding="16px" center>
      {is_edit ? (
          <Button _onClick={editPost}>게시글 수정</Button>
        ) : (
          <Button _onClick={addPost}>게시글 작성</Button>
        )}
      </Grid>
    </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
