import React from "react";
import Detail from "../components/Detail";

import { useDispatch, useSelector } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/post";

// 게시글 상세 페이지
const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  
  const post_list = useSelector((store) => store.post.list);
  const post_idx = post_list.findIndex((p) => p.postId.toString() === id);
  const post = post_list[post_idx];

  React.useEffect(() => {
    console.log(post_list)
    if (post) {
      return;
    }
    dispatch(postActions.getOnePostMiddleware(id))
  }, []);

  return (
    <React.Fragment>
      {post && (
        <Detail {...post}/>
      )}
    </React.Fragment>
  );
};

export default PostDetail;
