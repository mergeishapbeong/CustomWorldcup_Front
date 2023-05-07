import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <LogoDiv>
          <LogoATag>SWSchool</LogoATag>
        </LogoDiv>
        <IconDiv>
          <LinkUl>
            <LinkLi>
              <LinkATag>이상형 월드컵</LinkATag>
            </LinkLi>
            <LinkLi>
              <LinkATag>이상형 월드컵 만들기</LinkATag>
            </LinkLi>
            <LinkLi>
              <LinkATag>내가 만든 월드컵</LinkATag>
            </LinkLi>
          </LinkUl>
          <LoginUl>
            <LoginLi>
              <LoginATag>Login</LoginATag>
            </LoginLi>
          </LoginUl>
        </IconDiv>
      </NavBar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d6e6f2;
  height: 50px;
`;

const NavBar = styled.nav`
  background: #d6e6f2;
`;

const LogoDiv = styled.div`
  float: left;
`;

const LogoATag = styled.a`
  background: #769fcd;
  color: #fff;
  padding: 15px 25px;
  float: left;
  font-size: 18px;
  line-height: 20px;
  cursor: pointer;
`;

const IconDiv = styled.div`
  display: flex;
  margin: 0;
`;

const LinkUl = styled.ul`
  padding-left: 0;
  float: left;
  margin: 0;
  list-style: none;
`;

const LinkLi = styled.li`
  float: left;
  position: relative;
  display: block;
  text-align: -webkit-match-parent;
`;

const LinkATag = styled.a`
  padding: 15px 20px;
  color: #676a6c;
  font-weight: 600;
  line-height: 20px;
  position: relative;
  display: block;
  cursor: pointer;
  text-decoration: none;
`;

const LoginUl = styled.ul`
  padding-left: 0;
  float: left;
  margin: 0;
  list-style: none;
  margin-left: 780px;
`;

const LoginLi = styled.li`
  display: inline-block;
  position: relative;
`;

const LoginATag = styled.a`
  padding: 15px 20px;
  color: #676a6c;
  font-weight: 600;
  line-height: 20px;
  position: relative;
  display: block;
  cursor: pointer;
  text-decoration: none;
`;
