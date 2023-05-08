import React, { useState } from 'react'; // useState를 가져옵니다.
import styled from 'styled-components';

const Result = () => {
  const ranking = [
    { rank: 1, imageSrc: 'https://example.com/image1.jpg', name: 'Image 1', winCount: 10, totalCount: 20 },
    { rank: 2, imageSrc: 'https://example.com/image2.jpg', name: 'Image 2', winCount: 7, totalCount: 20 },
    { rank: 3, imageSrc: 'https://example.com/image3.jpg', name: 'Image 3', winCount: 5, totalCount: 20 },
    { rank: 4, imageSrc: 'https://example.com/image4.jpg', name: 'Image 4', winCount: 3, totalCount: 20 },
  ];

  // 댓글 관리를 위한 상태와 함수 추가
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <Container>
      <h1>결과</h1>
      <RankingContainer>
        {ranking.map((item) => (
          <RankingItem key={item.rank}>
            <Rank>{item.rank}</Rank>
            <Image src={item.imageSrc} alt={item.name} />
            <Name>{item.name}</Name>
            <WinCount>{`승리 횟수: ${item.winCount}`}</WinCount>
            <TotalCount>{`총 선택 횟수: ${item.totalCount}`}</TotalCount>
          </RankingItem>
        ))}
      </RankingContainer>
      {/* 댓글 입력 및 댓글 목록 표시 부분 */}
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
          {comments.map((comment, index) => (
            <Comment key={index}>{comment}</Comment>
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