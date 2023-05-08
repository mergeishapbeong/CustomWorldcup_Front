import React, { useState } from 'react';
import styled from 'styled-components';
import Play from './Play';
import Result from './Result';

const Main = () => {
  const imageSrc = "https://example.com/image.jpg";
  const title = "예제 타이틀";
  const description = "예제 설명";

  const [page, setPage] = useState('');

  const handlePlay = () => {
    setPage('play');
  };

  const handleResult = () => {
    setPage('result');
  };

  if (page === 'play') {
    return <Play worldCupName={title} round={1} totalRounds={4} goToResult={handleResult} />;
  }

  if (page === 'result') {
    return <Result />;
  }


  return (
    <Container>
      <Header>
        <h1>커스텀 월드컵 프로그램</h1>
      </Header>
      <BoxContainer>
        <ImageContainer>
          <Image src={imageSrc} alt="image1" />
          <Image src={imageSrc} alt="image2" />
        </ImageContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonContainer>
          <PlayButton  onClick={handlePlay}>플레이</PlayButton>
          <ResultButton onClick={handleResult}>결과 페이지</ResultButton>
        </ButtonContainer>
      </BoxContainer>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  text-align: center;
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin-bottom: 2rem;
`;

const ContentContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const BoxContainer = styled.div`
  position: relative;
  width: 374px;
  height: 243px;
  background: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PlayButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const ResultButton = styled.button`
  background-color: #008cba;
  color: white;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0073b7;
  }
`;