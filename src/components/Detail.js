import React from "react";
import { history } from "../redux/configureStore";
import styled from 'styled-components';
import { Grid, Button, Text } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";
function Detail(props) {

  const dispatch = useDispatch();
    return (  
        <div className="container">
          <Grid>
            <Text className="red">{props.title}</Text>
          </Grid>
   
          <Grid is_flex>
            <Grid>
              <img src={props.image} width="100%" />
            </Grid>
            <Grid padding="16px">
              <h4>장난감 1</h4>
              <p>닉네임</p>
              <p>{props.content}</p>
            </Grid>
            <Button
                  width="auto"
                  margin="4px"
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
                  margin="4px"
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
          </Grid>
        </div>
    )
}

export default Detail;