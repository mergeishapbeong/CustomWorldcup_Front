import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    navigate("/main");
  };

  const loginCheck = (type) => {
    if (token == null) {
      alert("로그인을 해주세요.");
      navigate("/signin");
    } else {
      navigate(type);
    }
  };

  return (
    <HeaderContainer>
      <NavBar>
        <LogoDiv>
          <LogoATag
            onClick={() => {
              navigate("/main");
            }}
          >
            SWSchool
          </LogoATag>
        </LogoDiv>
        <IconDiv>
          <TopLinkUl>
            <LinkLi>
              <LinkATag
                onClick={() => {
                  navigate("/main");
                }}
              >
                이상형 월드컵
              </LinkATag>
            </LinkLi>
            <LinkLi>
              <LinkATag
                onClick={() => {
                  loginCheck("/worldcupcreate");
                }}
              >
                이상형 월드컵 만들기
              </LinkATag>
            </LinkLi>
            <LinkLi>
              <LinkATag
                onClick={() => {
                  loginCheck("/mypage");
                }}
              >
                내가 만든 월드컵
              </LinkATag>
            </LinkLi>
          </TopLinkUl>
          {token == null ? (
            <div>
              <LoginUl>
                <LoginLi>
                  <LoginATag
                    onClick={() => {
                      navigate("/signin");
                    }}
                  >
                    Login
                  </LoginATag>
                </LoginLi>
              </LoginUl>
            </div>
          ) : (
            <div>
              <LoginUl>
                <LoginLi>
                  <LoginATag onClick={logoutHandler}>Logout</LoginATag>
                </LoginLi>
              </LoginUl>
            </div>
          )}
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
  width: 100%;
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

const TopLinkUl = styled.ul`
  width: 93%;
  padding-left: 0;
  float: left;
  margin: 0;
  list-style: none;
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
