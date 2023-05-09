import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAPI } from "../axios";

function Mypage() {
  const navigate = useNavigate();
  const [worldcupList, setWorldCupList] = useState([]);

  useEffect(() => {
    getAPI("/api/mypage/worldcup").then((data) => {
      console.log("data :: ", data.status);
      if (data.status === 200) {
        setWorldCupList(data.data.results);
      }
    });
  }, []);

  console.log("worldcupList :: ", worldcupList);

  return (
    <Container>
      <TextDiv>
        <h1>MyPage</h1>
      </TextDiv>
      <ContentDiv>
        <ContentBox>
          {worldcupList.map((worldCut) => {
            return (
              <Content>
                <ContentImg>
                  <ImgDiv>이미지</ImgDiv>
                  <ImgDiv>이미지</ImgDiv>
                </ContentImg>
                <ContentName>{worldCut.title}</ContentName>
                <ContentText>{worldCut.content}</ContentText>
                <ContentBtn
                  onClick={() => {
                    navigate("/worldcupcreate");
                  }}
                >
                  수정하기
                </ContentBtn>
              </Content>
            );
          })}
        </ContentBox>
      </ContentDiv>
    </Container>
  );
}

export default Mypage;

const Container = styled.div`
  width: 1200px;
  margin: auto;
`;

const TextDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const ContentDiv = styled.div`
  width: 1200px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  width: 350px;
  height: 220px;
  background-color: #b9d7ea;
  margin: 20px 20px;
  text-align: right;
`;

const ContentName = styled.div`
  background: #d6e6f2;
  width: 100%;
  height: 30px;
  text-align: left;
`;

const ContentText = styled.div`
  background: #d6e6f2;
  width: 100%;
  height: 30px;
  text-align: left;
`;

const ContentBtn = styled.button`
  width: 100px;
  height: 25px;
  background-color: #f7fbfc;
  border: 3px solid #f7fbfc;
  margin: 2px 10px auto 0px;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

const ContentImg = styled.div`
  width: 100%;
  height: 130px;
  background: white;
  display: flex;
`;

const ImgDiv = styled.div`
  text-align: left;
  width: 50%;
  height: 130px;
  background: #769fcd;
`;
