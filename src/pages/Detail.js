import React, {useState} from "react";
import { history } from "../redux/configureStore";
import styled from 'styled-components';
import { Grid,Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";
function Detail(props) {

 
  let [inputData, inputData변경] = useState('');
  const dispatch = useDispatch();
    return (  
        <div className="container">
          <박스>
            <제목 className="red">{props.title}</제목>
          </박스>
   
          <Grid is_flex>
            <Grid>
              <img src={props.image} width="100%" />
            </Grid>
            <Grid padding="16px">
              <h4>장난감 1</h4>
              <p>닉네임</p>
              <p>저희 고양이가 너무 좋아해서 후기글 남깁니다 매일 매일 가지고 놀아요~~~</p>
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
                    history.push(`/write/${props.id}`);
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
                    dispatch(postActions.deletePostMiddleware(props.id));
                  }}
                >
                  삭제
                </Button>
          </Grid>
        </div>
    )
}


let 박스 = styled.div`
  padding: 30px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${props => props.색상}
`;


export default Detail;