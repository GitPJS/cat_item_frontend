import React from "react";
import Post from "../components/Post";

import { useDispatch, useSelector } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/post";
import Detail from "./Detail";

// 게시글 상세 페이지
const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const post_list = useSelector((state) => state.post.list);

  const post_idx = post_list.findIndex((p) => p.id.toString() === id);

  const post = post_list[post_idx];

  React.useEffect(() => {
    
    if (post) {
      return;
    }
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
