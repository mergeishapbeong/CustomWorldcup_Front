import React from "react";
import styled from "styled-components";

function WorldCupCreate() {
  return (
    <Container>
      <ContentDiv>
        <PageNameDiv>
          <PageNameHTag>이상형 월드컵 기본정보</PageNameHTag>
        </PageNameDiv>
        <InputDiv>
          <form>
            <InputBox>
              <InputLabel>제목</InputLabel>
              <InputText>
                <Input />
                <InputSpan>
                  이상형 월드컵의 제목을 입력하세요. 예) 고양이 월드컵, 강아지
                  월드컵
                </InputSpan>
              </InputText>
            </InputBox>
            <GapDiv></GapDiv>
            <InputBox>
              <InputLabel>제목</InputLabel>
              <InputText>
                <Input />
                <InputSpan>설명, 하고싶은 말 등을 자유롭게 쓰세요.</InputSpan>
              </InputText>
            </InputBox>
          </form>
        </InputDiv>
        <ImgContent>
          <ImgBox>
            <ImgDiv>
              <PageNameDiv>
                <PageNameHTag>이상형 월드컵 이미지 업로드</PageNameHTag>
              </PageNameDiv>
              <ImgInputDiv>
                <InputImgBox>
                  <InputLabel>이미지 제목</InputLabel>
                  <InputText>
                    <Input />
                    <InputSpan>이미지 제목을 입력하세요.</InputSpan>
                  </InputText>
                </InputImgBox>
                <ImgFormContent>
                  <ImgForm>
                    <ImgFormText>
                      <span>
                        <strong>
                          Drop files here or click to upload.
                          <br />
                          여기 파일을 놓거나 클릭하여 업로드하세요.
                        </strong>
                      </span>
                    </ImgFormText>
                  </ImgForm>
                </ImgFormContent>
              </ImgInputDiv>
            </ImgDiv>
          </ImgBox>
        </ImgContent>
        <StoreBtn>저장하기</StoreBtn>
      </ContentDiv>
    </Container>
  );
}

export default WorldCupCreate;

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

const ContentDiv = styled.div`
  background: #f3f3f4;
  height: 800px;
  padding: 15px;
`;

const PageNameDiv = styled.div`
  background-color: #fff;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0 0;
  color: inherit;
  margin-bottom: 0;
  padding: 15px 15px;
  min-height: 48px;
  box-sizing: border-box;
`;

const PageNameHTag = styled.h2`
  display: inline-block;
  font-size: 14px;
  margin: 0 0 7px;
  padding: 0;
  text-overflow: ellipsis;
  float: left;
  font-weight: 600;
`;

const InputDiv = styled.div`
  background-color: #fff;
  color: inherit;
  padding: 15px 20px 20px;
  width: 100%;
  box-sizing: border-box;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0;
`;

const InputBox = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  width: 100%;
  display: flex;
`;

const InputLabel = styled.label`
  padding-top: 9px;
  margin-bottom: 0;
  text-align: center;
  width: 10%;
`;

const InputText = styled.label`
  width: 90%;
`;

const Input = styled.input`
  background-color: #fff;
  background-image: none;
  border: 1px solid #e5e6e7;
  border-radius: 1px;
  color: inherit;
  display: block;
  padding: 10px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;
  font-size: 14px;
`;

const InputSpan = styled.span`
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
  margin-bottom: 0;
`;

const GapDiv = styled.div`
  border-top: 1px dashed #e7eaec;
  color: #fff;
  background-color: #fff;
  height: 1px;
  margin: 20px 0;
`;

const ImgContent = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;

const ImgBox = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

const InputImgBox = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  width: 100%;
  display: flex;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const ImgDiv = styled.div`
  clear: both;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0;
`;

const ImgInputDiv = styled.div`
  background-color: #fff;
  color: inherit;
  padding: 15px 20px 20px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0;
  clear: both;
`;

const ImgFormContent = styled.div`
  background-color: #fff;
  color: inherit;
  padding: 15px 20px 20px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0;
`;

const ImgForm = styled.form`
  min-height: 150px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background: #fff;
  padding: 20px;
  cursor: pointer;
`;

const ImgFormText = styled.div`
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StoreBtn = styled.button`
  margin-top: 15px;
  margin-bottom: 5px;
  margin-right: 5px;
  background-color: #769fcd;
  border-color: #769fcd;
  color: #fff;
  border-radius: 3px;
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  cursor: pointer;
  border: 1px solid transparent;
  float: right;
`;
