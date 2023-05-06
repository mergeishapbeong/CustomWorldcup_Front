import React from "react";
import styled from "styled-components";

function SignIn() {
  return (
    <Container>
      <TextDiv>
        <h2>로그인</h2>
        <p>아이디와 비밀번호를 입력해주세요.</p>
      </TextDiv>
      <form>
        <FormDiv>
          <UserID></UserID>
          <UserPW></UserPW>
        </FormDiv>
        <FormBtnDiv>
          <LoginBtn>로그인</LoginBtn>
          <AddBtn>계정 생성</AddBtn>
        </FormBtnDiv>
      </form>
    </Container>
  );
}

export default SignIn;

const Container = styled.div`
  width: 400px;
  margin: auto;
`;

const TextDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 100px;
`;

const FormDiv = styled.div`
  width: 300px;
  margin: auto;
`;

const UserID = styled.input.attrs({ placeholder: "아이디" })`
  height: 35px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

const UserPW = styled.input.attrs({ placeholder: "비밀번호" })`
  height: 35px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

const FormBtnDiv = styled.div`
  width: 300px;
  margin: auto;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  background-color: #b9d7ea;
  border: 3px solid #b9d7ea;
  color: black;
`;

const AddBtn = styled.button`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  background-color: #769fcd;
  border: 3px solid #769fcd;
  color: white;
`;
