import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();
  const [userId, setId] = React.useState("");
  const [userPw, setPwd] = React.useState("");

  const login = () => {
    // 하나라도 입력하지 않을 경우
    if (userId === "" || userPw === "") {
      window.alert("로그인 정보를 모두 입력해주세요.");
      return;
    }
    // 인풋 입력값 받아서 로그인 함수 실행
    dispatch(userActions.LoginDB(userId, userPw));
  };

  return (
    <React.Fragment>
      <Title>Cat item</Title>
      <Div>
        <H1>로그인</H1>
        <P>아이디</P>
        <Input
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="이메일 형식으로 입력해주세요."
        />
        <P>비밀번호</P>
        <Input
          type="password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요."
        ></Input>
        <Button onClick={login}>로그인하기</Button>
        <Question>
          <Link to="/register" style={{ marginTop: "16px", marginLeft: "10px" }}>
            회원가입
          </Link>
        </Question>
      </Div>
    </React.Fragment>
  );
};

export default Login;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 32rem;
  margin: 0px auto;
  margin-top: 6.25rem;
  border: 2px solid #f9ebff;
  border-radius: 20px;
  padding: 50px 50px 50px 50px;
  background-color: #f4f4f4;
  @media all and (max-width: 414px) {
    width: auto;
    margin: 1rem;
    & h1 {
      font-size: 1.5rem;
    }
  }
  @media all and (max-width: 375px) {
    width: auto;
    margin: 1rem;
    & h1 {
      font-size: 1.5rem;
    }
  }
`;

const P = styled.p`
  font-size: 20px;
  color: #a445c5;
  margin: 0px auto;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-top: 10px;
  @media all and (max-width: 414px) {
    margin-left: 0;
    font-size: 1rem;
  }
  @media all and (max-width: 375px) {
    margin-left: 0;
    font-size: 1rem;
  }
`;

const Input = styled.input`
  width: 25rem;
  height: 40px;
  margin: 0px auto;
  padding-left: 5px;

  @media all and (max-width: 414px) {
    width: 100%;
  }
  @media all and (max-width: 375px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 12.5rem;
  height: 3rem;
  margin: 30px auto;
  background-color: slateblue;
  color : white;
  border: 0px solid #e6ccef;
  border-radius: 5px;
  font-size: 1rem;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0px auto;
  margin-bottom: 30px;
`;

const Question = styled.div`
  font-size: 1rem;
  width: 12.5rem;
  display: flex;
  flex-direction: row;
  margin-left: 14rem;
  justify-content: flex-end;
  @media all and (max-width: 1024px) {
    width: auto;
    margin: 0;
  }
  @media all and (min-width: 1024px) {
    width: auto;
    margin: 0;
  }

  @media all and (max-width: 768px) {
    width: auto;
    margin: 0;
  }

  @media all and (max-width: 414px) {
    width: auto;
    font-size: 0.8rem;
    margin: 0;
    justify-content: center;

    & > p {
      margin-top: 1rem;
      display: flex;
      align-items: center;
    }
  }
  @media all and (max-width: 375px) {
    width: auto;
    font-size: 0.8rem;
    margin: 0;
    justify-content: center;
    & > p {
      margin-top: 1rem;
      display: flex;
      align-items: center;
    }
  }
`;


const Title = styled.div`
  font-family: "Lobster", cursive;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  font-size: 5rem;
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    font-size: 4.7rem;
  }
  @media (max-width: 414px) {
    font-size: 3.2rem;
  }
  @media (max-width: 375px) {
    font-size: 3rem;
  }
  @media (max-width: 280px) {
    font-size: 2.8rem;
  }
`;
