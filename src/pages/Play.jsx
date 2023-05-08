import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Play = ({ worldCupName, totalRounds }) => {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { id: 1, src: 'https://example.com/image1.jpg', name: 'Image 1' },
    { id: 2, src: 'https://example.com/image2.jpg', name: 'Image 2' },
  ];

  const [round, setRound] = useState(1);
  const [roundImages, setRoundImages] = useState(images);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    if (round === totalRounds) {
      goToResult(); // 모든 라운드가 끝난 경우 결과 페이지로 이동
    }

    setRound((prevRound) => prevRound + 1);

    setRoundImages((prevRoundImages) => {
      const newImages = prevRoundImages.map((img) => ({
        ...img,
        src: img.src.replace(/(\d+)/, (match) => parseInt(match) + 1),
      }));
      return newImages;
    });
  };

  const goToResult = () => {
    navigate('/result');
  };

  return (
    <Container>
      <ProgressInfo>
        <h1>{worldCupName}</h1>
        <p>{`진행 사항: ${round}/${totalRounds}`}</p>
      </ProgressInfo>
      <ImageContainer>
        {roundImages.map((image) => (
          <ClickableImage
            key={image.id}
            src={image.src}
            alt={image.name}
            onClick={() => handleImageClick(image)}
          >
            <ImageName>{image.name}</ImageName>
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