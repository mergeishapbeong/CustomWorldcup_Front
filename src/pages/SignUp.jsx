import React, { useState } from "react";
import styled from "styled-components";
import { postAPI } from "../axios";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const validation = () => {
    // 닉네임 검사 -> 영문 대/소문자, 숫자만 사용할 수 있고 길이는 최소 3, 최대 12로 정한다
    let nickNameExp = /^[0-9a-zA-Z]{3,12}$/;
    //  비밀번호 -> 영문 대/소문자, 숫자만 사용할 수 있고 길이는 최소 4, 최대 12로 정한다
    let pwExp = /^[0-9a-zA-Z]{4,12}$/;
    let regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (nickname === "") {
      alert("아이디를 입력해주세요.");
      return false;
    }
    if (!nickNameExp.test(nickname)) {
      alert("영문 대/소문자, 숫자로 4~12글자를 입력해주세요");
      return false;
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return false;
    }
    if (!pwExp.test(password)) {
      alert("영문 대/소문자, 숫자로 4~12글자를 입력해주세요");
      return false;
    }

    if (confirmPassword === "") {
      alert("비밀번호 재입력을 입력해주세요.");
      return false;
    }
    // 비밀번호 재확인
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    }
    if (email === "") {
      alert("이메일을 입력해주세요.");
      return false;
    }
    if (!regExp.test(email)) {
      alert("이메일 형식으로 입력해주세요.");
      return false;
    }

    return true;
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
    console.log(nickname);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    const user = {
      nickname,
      password,
      email,
    };

    if (validation()) {
      postAPI("/api/auth/signup", user)
        .then((data) => {
          console.log("data :", data);
          alert("회원가입이 완료되었습니다.");
          document.location.href = "/signin";
        })
        .catch((e) => console.log("e :: ", e));
    }
  };

  return (
    <Container>
      <TextDiv>
        <h2>회원가입</h2>
        <p>별 다른 인증없이 회원가입이 가능합니다.</p>
      </TextDiv>
      <form>
        <FormDiv>
          <Input
            type={"text"}
            placeholder={"아이디"}
            clickAddInputHandler={handleNickname}
          ></Input>
          <Input
            type={"password"}
            placeholder={"비밀번호"}
            clickAddInputHandler={handlePassword}
          ></Input>
          <Input
            type={"password"}
            placeholder={"비밀번호 재입력"}
            clickAddInputHandler={handleConfirmPassword}
          ></Input>
          <Input
            type={"text"}
            placeholder={"이메일"}
            clickAddInputHandler={handleEmail}
          ></Input>
        </FormDiv>
        <FormBtnDiv>
          <AddBtn onClick={signUpHandler}>계정 생성</AddBtn>
          <BtnPTag>
            <small>이미 계정이 있으신가요?</small>
          </BtnPTag>
          <LoginBtn
            onClick={() => {
              navigate("/signin");
            }}
          >
            로그인
          </LoginBtn>
        </FormBtnDiv>
      </form>
    </Container>
  );
};

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
  color: white;
`;

const AddBtn = styled.button`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  background-color: #769fcd;
  border: 3px solid #769fcd;
  color: white;
`;

const BtnPTag = styled.p`
  text-align: center;
  margin: 0;
  margin-bottom: 15px;
`;
