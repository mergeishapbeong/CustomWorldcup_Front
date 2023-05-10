import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const API_BASE_URL = "http://13.125.1.214/api";

const Result = () => {
  const { id } = useParams();
  const location = useLocation();
  const [finalImage, setFinalImage] = useState(null);
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseResult = await fetch(`${API_BASE_URL}/worldcups/${id}/result`);
  
      if (responseResult.ok) {
        const resultData = await responseResult.json();
        setFinalImage({ name: resultData.choice_name, url: resultData.choice_url });
        // 다른 데이터를 사용하려면 상태를 추가하고 값을 설정해주세요.
      } else {
        console.error(
          `Error fetching result: ${responseResult.status} ${responseResult.statusText}`
        );
      }
    };
  
    fetchData();
  }, [id]);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부를 확인하는 상태 (임시로 설정)
  const userNickname = "사용자 닉네임"; // 로그인 한 사용자의 닉네임을 가져옵니다. 임시로 설정하였습니다.

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const navigate = useNavigate();

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    setComments([...comments, { nickname: userNickname, comment: newComment }]);
    setNewComment("");
  };

  return (
    <Container>
      <h1>결과</h1>
      {finalImage && (
        <FinalImageContainer>
          <h2>최종 선택된 이미지</h2>
          <FinalImage src={finalImage.url} alt={finalImage.name} />
          <FinalImageName>{finalImage.name}</FinalImageName>
        </FinalImageContainer>
      )}
      <RankingContainer>
        {ranking.map((item) => (
          <RankingItem key={item.rank}>
            <Rank>{item.rank}</Rank>
            <Image src={item.imageUrl} alt={item.name} />
            <Name>{item.name}</Name>
            <WinCount>{`1위 횟수: ${item.firstPlaceCount}`}</WinCount>
          </RankingItem>
        ))}
      </RankingContainer>
      <CommentSection>
        <h3>댓글</h3>
        <CommentForm onSubmit={handleCommentSubmit}>
          <CommentInput
            type="text"
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={handleCommentChange}
          />
          <CommentButton type="submit">댓글 달기</CommentButton>
        </CommentForm>
        <CommentList>
          {comments.map((item, index) => (
            <Comment key={index}>
              <CommentNickname>{item.nickname}</CommentNickname>
              <CommentText>{item.comment}</CommentText>
            </Comment>
          ))}
        </CommentList>
      </CommentSection>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const RankingItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Rank = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const Name = styled.span`
  font-size: 18px;
`;

const WinCount = styled.span`
  font-size: 16px;
`;

const TotalCount = styled.span`
  font-size: 16px;
`;

const CommentSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const CommentForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CommentButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 6px 12px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Comment = styled.li`
  background-color: #f1f1f1;
  padding: 8px 16px;
  margin-bottom: 5px;
  border-radius: 4px;
`;

const CommentNickname = styled.span`
  font-weight: bold;
`;

const CommentText = styled.span`
  display: block;
  margin-top: 4px;
`;

const FinalImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const FinalImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FinalImageName = styled.h3`
  margin-top: 1rem;
`;