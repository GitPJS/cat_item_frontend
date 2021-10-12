import React, {useState} from "react";

function Comments(){

  let [title, titles] = useState([]);
  let [count, counts] = useState(0);
  //내가 입력한 인풋값 추가하기 2(2)
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
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
        }}>저장</button>
      </div>

      {
        title.map((t,i)=>{
          return(
            <div className="list" key={i}>
              <h5>닉네임</h5>
              <h3 onClick={()=>{counts(i)}}> {t}</h3>
              <p>2021-10-10 10:00</p>
              <hr/>
            </div>
          )
        })
      }

      

    </div>
  );
}

export default Comments;