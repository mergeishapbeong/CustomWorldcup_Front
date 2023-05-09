import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add icons to the library
library.add(solidHeart, regularHeart);

const API_URL = 'http://13.125.1.214/api';

const Main = () => {
  const [worldCups, setWorldCups] = useState([]);

  useEffect(() => {
    fetchWorldCups();
  }, []);

  const fetchWorldCups = async () => {
    try {
      const response = await axios.get(`${API_URL}/worldcup/`);
      setWorldCups(response.data.worldcups);
    } catch (error) {
      console.error("Failed to fetch world cups:", error);
    }
  };

  const sortByLikes = () => {
    setWorldCups([...worldCups].sort((a, b) => b.likes - a.likes));
  };

  const sortByDate = () => {
    setWorldCups(
      [...worldCups].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    );
  };

  return (
    <Container>
      <SortButtons>
        <button onClick={sortByLikes}>좋아요 순</button>
        <button onClick={sortByDate}>최신 순</button>
      </SortButtons>
      <WorldCupGrid>
        {worldCups.map((worldCup) => (
          <WorldCupCard key={worldCup.worldcup_id} worldCup={worldCup} />
        ))}
      </WorldCupGrid>
    </Container>
  );
};

const WorldCupCard = ({ worldCup }) => {
  const { worldcup_id, title, content, choices, likes } = worldCup;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const toggleLike = async (worldCupId, liked) => {
    try {
      const response = await axios.put(
        `${API_URL}/worldcup/${worldCupId}/likes`,
        {
          like: !liked,
        }
      );
      setLikeCount(response.data.likes);
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

  const handleLike = (worldCupId) => {
    setLiked((prevLiked) => {
      toggleLike(worldCupId, prevLiked);
      return !prevLiked;
    });
  };

  if (!choices || choices.length < 2) {
    return null;
  }

  return (
    <Card>
      <ImageContainer>
        {choices && choices.length >= 2 ? (
          <>
            <Image src={choices[0].choice_url} alt={choices[0].choice_name} />
            <Image src={choices[1].choice_url} alt={choices[1].choice_name} />
          </>
        ) : (
          <Empty />
        )}
      </ImageContainer>
      <Title>{title}</Title>
      <Description>{content}</Description>
      <ButtonContainer>
        <Link to={`/play/${worldCup.worldcup_id}`}>
          <PlayButton>플레이</PlayButton>
        </Link>
        <Link to={`/result/${worldCup.worldcup_id}`}>
          <ResultButton>결과 페이지</ResultButton>
        </Link>
        <Likes>
          <FontAwesomeIcon
            icon={liked ? solidHeart : regularHeart}
            onClick={() => handleLike(worldcup_id)}
          />
          {likeCount} 좋아요
        </Likes>
      </ButtonContainer>
    </Card>
  );
};

export default Main;

// Styled components
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SortButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
`;

const WorldCupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
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
  width: 100px;
  height: 100px;
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

const Likes = styled.span`
  font-size: 14px;
  color: #333;
`;

const Empty = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;
