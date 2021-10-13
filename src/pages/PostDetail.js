import React, {useState} from "react";
import { useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Grid from "../elements/Grid";

function Detail(props) {

 
  let [inputData, inputData변경] = useState('');

    let { id } = useParams();
    //뒤로가기 1(2)
    let history = useHistory();
    

    return (
        <div className="container">
          <박스>
            <제목 className="red">제품 후기</제목>
          </박스>
   
          <Grid is_flex>
            <Grid>
              <img src="https://imgc.1300k.com/aaaaaib/goods/215024/83/215024836202.jpg?3" width="100%" />
            </Grid>
            <Grid padding="16px">
              <h4>장난감 1</h4>
              <p>닉네임</p>
              <p>저희 고양이가 너무 좋아해서 후기글 남깁니다 매일 매일 가지고 놀아요~~~</p>
            </Grid>
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