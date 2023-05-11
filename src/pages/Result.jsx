import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://13.125.1.214/api";

const Result = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const worldcup_choice_id = queryParams.get("worldcup_choice_id");
  const [finalImage, setFinalImage] = useState(null);
  const [ranking, setRanking] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!worldcup_choice_id) {
        console.error(
          "worldcup_choice_id is not set in the URL query parameters."
        );
        return;
      }
      const token = sessionStorage.getItem("token");
      const refreshToken = sessionStorage.getItem("refreshToken");
      console.log(worldcup_choice_id);
      // console.log(worldcup_choice_id);

      try {
        const responseResult = await axios.get(
          `${API_BASE_URL}/worldcup/${id}/result/${worldcup_choice_id}`,
          {
            headers: {
              Authorization: `${token}`,
              refreshtoken: `${refreshToken}`,
            },
          }
        );
        console.log("responseResult ::", responseResult);

        if (responseResult.status === 200) {
          const resultData = responseResult.data;
          console.log("Result data: ", resultData.worldcupResult);
          // console.log("responseResult ::", responseResult);

          if (responseResult.status === 200) {
            const resultData = responseResult.data;
            // console.log("Result data: ", resultData.worldcupResult);

            setFinalImage({
              name: resultData.worldcupResult.choice_name,
              url: resultData.worldcupResult.choice_url,
            });
            // const sortedResultData = resultData.result.sort(
            //   (a, b) => b.win_count - a.win_count
            // );
            // setRanking(sortedResultData);
            // console.log("Sorted result data: ", sortedResultData);

            // 댓글 조회
            const commentResponse = await axios.get(
              `${API_BASE_URL}/worldcup/${id}/comments`,
              {
                headers: {
                  Authorization: `${token}`,
                  refreshtoken: `${refreshToken}`,
                },
              }
            );

            console.log("commentResponse :: ", commentResponse);
          } else {
            console.error(
              `Error fetching result: ${responseResult.status} ${responseResult.statusText}`
            );
            console.error("Error fetching result: ", responseResult);
          }
        }
      } catch (error) {
        console.error("Error fetching result: ", error);
      }
    };
    // const rankingData = resultData.result.map((item) => ({
    //   choice_url: item.choice_url,
    //   choice_name: item.choice_name,
    //   win_count: item.win_count,
    // }));

    fetchData();
  }, [id, worldcup_choice_id]);

  // useEffect(() => {
  //   console.log("finalImage updated: ", finalImage);
  //   console.log("ranking updated: ", ranking);
  // }, [finalImage, ranking]);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const userNickname = "익명";

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

  useEffect(() => {
    console.log("ranking updated: ", ranking);
  }, [ranking]);

  // console.log("comments ::", comments);
  return (
    <Container>
      <h1>결과</h1>
      {finalImage && (
        <FinalImageContainer>
          <h2>우승</h2>
          <FinalImage src={finalImage.url} alt={finalImage.name} />
          <FinalImageName>{finalImage.name}</FinalImageName>
        </FinalImageContainer>
      )}
      <RankingContainer>
        {ranking.map((item, index) => (
          <RankingItem key={index}>
            <Rank>{index + 1}</Rank>
            <Image src={item.choice_url} alt={item.choice_name} />
            <Name>{item.choice_name}</Name>
            <WinCount>{`1위 횟수: ${item.win_count}`}</WinCount>
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
              <CommentNickname>{userNickname}</CommentNickname>
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
