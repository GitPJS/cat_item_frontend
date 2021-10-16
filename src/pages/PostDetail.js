import React, {useState} from "react";
import { useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {Grid, Button} from "../elements";
import Comments from "../pages/Comments";
import { actionCreators as postActions } from "../redux/modules/post";
import Detail from "../components/Detail";
import Header from "../components/Header";




// function PostDetail(props) {
//   const dispatch = useDispatch();
 
//   let [inputData, inputData변경] = useState('');

//     let { id } = useParams();
//     //뒤로가기 1(2)
//     let history = useHistory();
    

//     return (
//         <React.Fragment>
//           <Grid padding="16px">
//             <Title>제품 후기</Title>
//             {/* 이미지와 설명 감싸는 박스 */}
//             <Grid is_flex>
//               {/* 이미지 */}
//               <Grid>
//                 <img src="https://imgc.1300k.com/aaaaaib/goods/215024/83/215024836202.jpg?3" width="100%" />
//               </Grid>
//               {/* 설명 */}
//               <Grid margin="16px">
//                 <h4>장난감 1</h4>
//                 <p>닉네임</p>
//                 <p className="d" style={{
//                   background: "#eee",
//                   width: "100%",
//                   height: "10vh",
//                   padding: "16px",
//                   textAlign: "justify"
//                 }}>저희 고양이가 너무 좋아해서 후기글 남깁니다 매일 매일 가지고 놀아요~~~</p>
//               </Grid>
//             </Grid>
//             <Button
//             width="auto"
//             margin="4px"
//             padding="4px"
//             _onClick={(e) => {
//             //  이벤트 캡쳐링과 버블링을 막아요!
//             // 이벤트 캡쳐링, 버블링이 뭔지 검색해보기! :)
//             e.preventDefault();
//             e.stopPropagation();
//             history.push(`/write/${props.id}`);
//             }}
//           >
//             수정
//           </Button>
//           <Button
//             width="auto"
//             margin="4px"
//             padding="4px"
//             _onClick={(e) => {
//               //  이벤트 캡쳐링과 버블링을 막아요!
//               // 이벤트 캡쳐링, 버블링이 뭔지 검색해보기! :)
//               e.preventDefault();
//               e.stopPropagation();
//               dispatch(postActions.deletePostMiddleware(props.id));
//             }}
//           >
//             삭제
//           </Button>
//           </Grid>

          


          

          

//       </React.Fragment>
//     )
// }

// let Title = styled.h4`
//   font-size: 25px;
// `;


// export default Detail;

import { useDispatch, useSelector } from "react-redux";



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
      <Header/>
      <Grid>
        {post && (
          <Detail {...post}/>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
