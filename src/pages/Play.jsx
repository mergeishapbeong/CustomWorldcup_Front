import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const API_URL = "http://13.125.1.214/api";

const Play = () => {
  const [worldCup, setWorldCup] = useState(null);
  const [round, setRound] = useState(0);
  const navigate = useNavigate();
  const { id: worldCupId } = useParams();
  const [selectedImages, setSelectedImages] = useState([]);
  const [finalImage, setFinalImage] = useState(null);

  useEffect(() => {
    const fetchWorldCup = async () => {
      try {
        console.log(`${API_URL}/worldcup/${worldCupId}`);
        const response = await axios.get(`${API_URL}/worldcup/${worldCupId}`);
        setWorldCup(response.data);
      } catch (error) {
        console.error("Failed to fetch world cup:", error);
      }
    };

    fetchWorldCup();
  }, [worldCupId]);

  const handleImageClick = (selectedImage) => {
    const currentRoundImages = getRoundImages(round);
    
    if (round < 2) {
      setSelectedImages([...selectedImages, selectedImage]);
    }

    if (round < 2) {
      setRound(round + 1);
    } else {
      setFinalImage(selectedImage);
      navigate(`/results/${worldCupId}`, { state: { finalImage: selectedImage } }); // 변경된 부분!
    }
  };

  const getRoundImages = (round) => {
    if (round === 0) {
      return worldCup.worldcup.choices.slice(0, 2);
    } else if (round === 1) {
      return worldCup.worldcup.choices.slice(2, 4);
    } else {
      return selectedImages;
    }
  };

  if (!worldCup) {
    return <div>Loading...</div>;
  }

  const roundImages = getRoundImages(round);

  const roundNames = ["4강", "4강", "결승"]; // 라운드 이름 수정

  return (
    <Container>
      <h1>{worldCup.title}</h1>
      <ProgressInfo>
        {worldCup.worldcup.choices
          ? `${roundNames[round]}`
          : "Loading..."}
      </ProgressInfo>
      <ImageContainer>
        {roundImages.map((choice, index) => (
          <ClickableImage
            key={index}
            src={choice.choice_url}
            alt={`round-${round}-image-${index}`}
            onClick={() => handleImageClick(choice)}
          >
            <ImageName>{choice.choice_name}</ImageName>
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
