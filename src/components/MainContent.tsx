import React from 'react';
import styled from "styled-components";
import { interfaceStudy } from "./interface";

const MainContent :React.FC = () => {
  interfaceStudy.study();
  return (
    <MainContentArticle>
    </MainContentArticle>
  );
}

const MainContentArticle = styled.article`
  font-size: 1rem;
  padding: 60px;
  min-height: 100vh;
  border-radius: 3px 3px 0 0;
  background-color: #f4f1ce;
`;

export default MainContent;
