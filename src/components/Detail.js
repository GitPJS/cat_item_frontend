import React from "react";
import { history } from "../redux/configureStore";
import styled from 'styled-components';
import { Grid, Button, Text } from "../elements";
import Comments from '../pages/Comments';
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";
function Detail(props) {

  const dispatch = useDispatch();
    return (  
        <div className="container">
          <Text bold size="24px">{props.title}</Text>
   
          <Grid style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto"
          }}>
            <div>
              <img src={props.image} width="80%"/>
            </div>
            
            <Button
              width="auto"
              margin="5px 5px 0px 0px"
              padding="4px"
              
              _onClick={(e) => {
                //  이벤트 캡쳐링과 버블링을 막아요!
                // 이벤트 캡쳐링, 버블링이 뭔지 검색해보기! :)
                e.preventDefault();
                e.stopPropagation();
                history.push(`/write/${props.postId}`);
              }}
            >
              수정
            </Button>

            <Button
              width="auto"
              padding="4px"
              _onClick={(e) => {
                //  이벤트 캡쳐링과 버블링을 막아요!
                // 이벤트 캡쳐링, 버블링이 뭔지 검색해보기! :)
                e.preventDefault();
                e.stopPropagation();
                dispatch(postActions.deletePostMiddleware(props.postId));
              }}
            >
              삭제
            </Button>
            
            <Grid margin="15px 0px 0px 0px">
              <h4>장난감 1</h4>
              <h5>닉네임</h5>
              <p>{props.content}</p>
            </Grid>

            <hr />

            <Comments />
          </Grid>
        </div>
    )
}

export default Detail;