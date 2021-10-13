import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as postActions } from "../redux/modules/post";
import AWS from 'aws-sdk';

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);
  const post_id = props.match.params.id;

  const is_edit = post_id ? true : false;
  const _post = is_edit ? post_list.find((p) => p.id.toString() === post_id): null;
  const [contents, setContents] = React.useState(_post ? _post.content : "");
  const [selectedFile, setSelectedFile] = React.useState("");
  const fileInput = React.useRef();
  const { history } = props;

    const ACCESS_KEY = 'AKIA5IRMDBE7D3E5JTX7';
    const SECRET_ACCESS_KEY = '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';
    const REGION = "ap-northeast-2";
    const S3_BUCKET = 'hangha99-cat-bu';

    AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY
    });

    const s3 = new AWS.S3({
        params: { Bucket: S3_BUCKET},
        region: REGION,
    });

  const changeContents = (e) => {
    setContents(e.target.value)
  }

  const addPost = () => {
    console.log(selectedFile)
    const params = {
      ACL: 'public-read',
      Body: selectedFile,
      Bucket: S3_BUCKET,
      Key: "upload/" + selectedFile.name
    };
    
    s3.upload(params,function(err, data){
      if(err){
        throw err;
      }else{
        dispatch(postActions.addPostMiddleware(contents,data.Location))
      }
    }); 
  }

  const editPost = () => {
    dispatch(postActions.editPostMiddleware(post_id,contents))
  }

  const selectFile = (e) => {
    
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      
    dispatch(imageActions.setPreview(reader.result));
    setSelectedFile(fileInput.current.files[0]);
    };
  };



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
          <input type="file" onChange={selectFile} ref={fileInput} />
        </Grid>
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
