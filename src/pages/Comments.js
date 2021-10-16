import React, {useState} from "react";
import { Grid } from "../elements"

function Comments(){

  let [title, titles] = useState([]);
  let [count, counts] = useState(0);
  //내가 입력한 인풋값 추가하기 2(2)
  let [입력값, 입력값변경] = useState('');
  // const createAt = moment().format("YYYY-MM-DD");


  return (
    <div className="App">
      <Grid padding="16px">
      <p>댓글쓰기</p>
      <p>닉네임</p>
      {/*내가 입력한 인풋값 추가하기 1(2)*/}
      <div>
        <input onChange={(e) => {입력값변경(e.target.value)}} placeholder="욕설은 징계 대상이 될 수 있습니다." style={{
          width: "100%",
          height: "50px"
        }}/>
        <button onClick={() => {
          var arrayCopy = [...title];
          arrayCopy.unshift(입력값);
          titles( arrayCopy );
        }}>댓글저장</button>
      </div>
      <hr />

      {/* 댓글창 */}
      {title.map((t,i)=>{
          return(
            <div className="list" key={i}>
              <h6>닉네임</h6>
              <p onClick={()=>{counts(i)}}> {t}</p>
              {/* <p>{createAt}</p> */}
              <hr/>
            </div>
          )
        })}

      
      </Grid>
    </div>
    
  );
}

export default Comments;