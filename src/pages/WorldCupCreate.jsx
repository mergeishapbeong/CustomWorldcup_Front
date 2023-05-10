import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { postAPI } from "../axios";

const WorldCupCreate = () => {
  // 여기에 필요한 함수나 변수를 선언하는 공간
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [choice_name, setChoice_Name] = useState("");
  const [choice_url, setChoice_Url] = useState("");

  // URL 검사
  const validation = () => {
    let urlExp =
      /^(?:(?:https?|ftp):\/\/)?(?:[^:@]+(?::[^:@]+)?@)?(?:www\.)?[^:/?#\s]+(?:\.[^:/?#\s]+)*(?::\d+)?(?:[/?#]\S*)?$/i;

    if (!urlExp.test(choice_url)) {
      return false;
    }
  };

  // 이미지 저장소
  const [files, setFiles] = useState([]);

  // validation 함수

  // 월드컵 제목
  const handleChange_title = (e) => {
    setTitle(e.target.value);
  };

  // 월드컵 설명
  const handleChange_content = (e) => {
    setContent(e.target.value);
  };

  // 이미지 제목
  const handleChange_choicename = (e) => {
    setChoice_Name(e.target.value);
  };

  // 이미지 url
  const handleChange_choiceurl = (e) => {
    setChoice_Url(e.target.value);
  };

  // 이미지 추가 버튼
  const clickAddButtonHandler = (e) => {
    e.preventDefault();

    if (validation) {
      alert("올바른 URL을 입력하세요");
      return false;
    }

    const newimg = {
      choice_name,
      choice_url,
    };
    // console.log("newimg :: ", newimg, files);

    setFiles([...files, newimg]);
    // setFiles(files.concat(newimg));

    // console.log("files ::", files);

    setChoice_Name("");
    setChoice_Url("");
  };

  // 저장 버튼
  const worldCupAddHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(content);
    console.log(choice_name);
    console.log(choice_url);
    console.log(files);

    const worldCup = {
      title,
      content,
      choices: files,
    };

    if (files.length < 2) {
      alert("이미지를 2개 이상 저장해주세요");
      return false;
    }

    postAPI("/api/worldcup", worldCup)
      .then(alert("이미지가 저장되었습니다"))
      .catch((e) => console.log("e :: ", e));
  };

  return (
    <Container>
      <ContentDiv>
        <PageNameDiv>
          <PageNameHTag>이상형 월드컵 기본정보</PageNameHTag>
        </PageNameDiv>
        <form>
          <InputDiv>
            <InputBox>
              <InputLabel>제목</InputLabel>
              <InputText>
                <Input type="text" onChange={handleChange_title} />
                <InputSpan>
                  이상형 월드컵의 제목을 입력하세요. 예) 고양이 월드컵, 강아지
                  월드컵
                </InputSpan>
              </InputText>
            </InputBox>
            <GapDiv></GapDiv>
            <InputBox>
              <InputLabel>내용</InputLabel>
              <InputText>
                <Input type="text" onChange={handleChange_content} />
                <InputSpan>설명, 하고싶은 말 등을 자유롭게 쓰세요.</InputSpan>
              </InputText>
            </InputBox>
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
                      <Input
                        type="text"
                        value={choice_name}
                        onChange={handleChange_choicename}
                      />
                      <InputSpan>이미지 제목을 입력하세요.</InputSpan>
                    </InputText>
                  </InputImgBox>
                  <InputImgBox>
                    <InputLabel>이미지 url</InputLabel>
                    <InputText>
                      <Input
                        type="text"
                        value={choice_url}
                        onChange={handleChange_choiceurl}
                      />
                      <InputSpan>이미지 url을 입력하세요.</InputSpan>
                    </InputText>
                  </InputImgBox>
                  <InputImgBox>
                    <InputLabels>이미지 저장</InputLabels>
                    <ImgTextBox>
                      <ImgStore>
                        {files.map((d) => (
                          <p style={{ marginRight: "5px", marginLeft: "5px" }}>
                            {d.choice_name}
                          </p>
                        ))}
                      </ImgStore>
                      <InputSpan>
                        이미지 저장공간 (4장만 저장할 수 있습니다)
                      </InputSpan>
                      <Button clickAddButtonHandler={clickAddButtonHandler}>
                        추가
                      </Button>
                    </ImgTextBox>
                  </InputImgBox>

                  {/* <ImgStore>
                    이름 :
                    {files.map((d) => (
                      <p>{d.choice_name}</p>
                    ))}
                    <br />
                    <Button clickAddButtonHandler={clickAddButtonHandler}>
                      추가
                    </Button>
                  </ImgStore> */}

                  {/* TODO 추후에 파일선택으로 변경 예정 
                  <ImgFormContent>
                    <ImgForm>
                      <ImgFormText>
                        <input type="file" />
                        <span>
                          <strong>
                            Drop files here or click to upload.
                            <br />
                            여기 파일을 놓거나 클릭하여 업로드하세요.
                          </strong>
                        </span>
                      </ImgFormText>
                    </ImgForm>
                  </ImgFormContent> */}
                </ImgInputDiv>
              </ImgDiv>
            </ImgBox>
          </ImgContent>
          <StoreBtn onClick={worldCupAddHandler}>저장하기</StoreBtn>
        </form>
      </ContentDiv>
    </Container>
  );
};

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

const InputLabels = styled.label`
  margin-top: 15px;
  padding-top: 9px;
  margin-bottom: 0;
  text-align: center;
  width: 10%;
`;

const InputText = styled.label`
  width: 90%;
`;

const ImgTextBox = styled.div`
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
  height: 300px;
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

const ImgForm = styled.div`
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
  margin-right: 20px;
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

const ImgStore = styled.div`
  background-color: #fff;
  background-image: none;
  border: 1px solid #e5e6e7;
  border-radius: 1px;
  color: inherit;
  display: flex;
  padding: 10px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;
  font-size: 14px;
  height: 45px;
`;

const ImgStoreDiv = styled.div`
  margin-bottom: 15px;
`;
