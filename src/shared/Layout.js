import { Header } from "../components/Header";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return (
    <GlobalContainer>
      <Header />
      <Main>{children}</Main>
    </GlobalContainer>
  );
};

const GlobalContainer = styled.div`
  //TODO 추후 전체 레이아웃 잡을 예정
  /* height: 1000px; */
`;

const Main = styled.div`
  height: 80%;
  width: 100%;
`;
