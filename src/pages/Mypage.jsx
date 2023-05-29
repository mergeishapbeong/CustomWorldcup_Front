import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteAPI, getAPI } from '../axios';
import { Link } from 'react-router-dom';

function Mypage() {
  const navigate = useNavigate();
  const [worldcupList, setWorldCupList] = useState([]);

  useEffect(() => {
    getAPI('/api/mypage/worldcup').then((data) => {
      if (data.status === 200) {
        console.log('data.data.results :: ', data.data.results);
        setWorldCupList(data.data.results);
      }
    });
  }, []);

  const handleDelete = (id) => {
    deleteAPI(`/api/worldcup/${id}`)
      .then(() => {
        alert('삭제가 완료되었습니다.');
        document.location.href = '/mypage';
      })
      .catch(() => {
        alert('삭제를 실패했습니다.');
      });
  };

  console.log('worldcupLists ::', worldcupList);

  return (
    <Container>
      <TextDiv>
        <h1>MyPage</h1>
      </TextDiv>
      <ContentDiv>
        <ContentBox>
          {worldcupList.map((worldCup, index) => {
            return (
              <Content key={index}>
                <ImgDiv>
                  {worldCup.Worldcup_choices.map((w, index) => {
                    return (
                      <img
                        src={w.choice_url}
                        style={{ width: '50%' }}
                        key={index}
                      ></img>
                    );
                  })}
                </ImgDiv>
                <ContentName>{worldCup.title}</ContentName>
                <ContentText>{worldCup.content}</ContentText>
                <Link to={`/worldcupupdate/${worldCup.worldcup_id}`}>
                  <ContentBtn>수정하기</ContentBtn>
                </Link>
                <ContentBtn
                  onClick={() => {
                    handleDelete(worldCup.worldcup_id);
                  }}
                >
                  삭제하기
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
  background-color: white;
  margin: 20px 20px;
  text-align: right;
  border: 1px solid #d6e6f2;
  border-radius: 3px;
  &:hover {
    border: 1px solid #4690e4;
  }
`;

const ContentName = styled.div`
  background: white;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  box-sizing: border-box;
  &:hover {
    color: #769fcd;
  }
`;

const ContentText = styled.div`
  background: white;
  width: 100%;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  box-sizing: border-box;
`;

const ContentBtn = styled.button`
  width: 100px;
  height: 25px;
  background-color: white;
  border: 1px solid #769fcd;
  margin-right: 10px;
  font-weight: bold;
  color: #769fcd;
  opacity: 1;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #769fcd;
    color: white;
    font-weight: bold;
    opacity: 1;
  }
`;

const ImgDiv = styled.div`
  text-align: left;
  width: 100%;
  height: 130px;
  background: black;
  display: flex;
`;
