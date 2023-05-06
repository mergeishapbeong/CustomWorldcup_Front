import React from "react";
import styled from "styled-components";

function SignUp() {
  return (
    <Container>
      <TextDiv>
        <h2>회원가입</h2>
        <p>별 다른 인증없이 회원가입이 가능합니다.</p>
      </TextDiv>
      <form>
        <FormDiv>
          <UserID></UserID>
          <UserPW></UserPW>
        </FormDiv>
        <FormBtnDiv>
          <AddBtn>계정 생성</AddBtn>
          <BtnPTag>
            <small>이미 계정이 있으신가요?</small>
          </BtnPTag>
          <LoginBtn>로그인</LoginBtn>
        </FormBtnDiv>
      </form>
    </Container>
  );
}

export default SignUp;

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
  background-color: gray;
  border: 3px solid gray;
  color: white;
`;

const AddBtn = styled.button`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  background-color: #699aea;
  border: 3px solid #699aea;
  color: white;
`;

const BtnPTag = styled.p`
  text-align: center;
  margin: 0;
  margin-bottom: 15px;
`;
