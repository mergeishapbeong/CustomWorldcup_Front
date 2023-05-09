import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const API_URL = 'http://13.125.1.214/api';

const Play = () => {
  const [worldCup, setWorldCup] = useState(null);
  const [round, setRound] = useState(0);
  const navigate = useNavigate();
  const { id: worldCupId } = useParams();

  useEffect(() => {
    const fetchWorldCup = async () => {
      try {
        const response = await axios.get(`${API_URL}/worldcups/${worldCupId}`);
        setWorldCup(response.data);
      } catch (error) {
        console.error('Failed to fetch world cup:', error);
      }
    };

    fetchWorldCup();
  }, [worldCupId]);

  const handleImageClick = (image) => {
    // Implement your logic for handling image click and moving to the next round
  };

  if (!worldCup) {
    return <div>Loading...</div>;
  }

  // 월드컵의 이미지 목록에서 현재 라운드에 해당하는 이미지를 가져옵니다.
  const roundImages = worldCup.images.slice(round * 2, round * 2 + 2);

  return (
    <Container>
      <h1>{worldCup.title}</h1>
      <ProgressInfo>Round {round + 1} / {Math.ceil(worldCup.images.length / 2)}</ProgressInfo>
      <ImageContainer>
        {roundImages.map((image, index) => (
          <ClickableImage
            key={index}
            src={image}
            alt={`round-${round}-image-${index}`}
            onClick={() => handleImageClick(image)}
          >
            <ImageName>{`round-${round}-image-${index}`}</ImageName>
          </ClickableImage>
        ))}
      </ImageContainer>
    </Container>
  );
};

export default Play;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0;
`;

const ClickableImage = styled.div`
  width: 329px;
  height: 446px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
`;

const ImageName = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 0;
`;