import React from 'react';
import styled from 'styled-components';
import './cssans.min.css';

// person.ts
class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return "Hello, " + this.name;
  }
}

class Student extends Person {
  study(): string {
    return `${this.name} is studying.!!`;
  }
}

// function sum(a: number, b: number): number {
//   return a + b;
// }

const sum = (a: number, b: number): number => {
  return a + b;
}

const App: React.FC = () => {
  // const student = new Student('Lee');
  // console.log(student.sayHello());
  // console.log(student.study());
  // console.log(person.name);
  console.log(sum(2,3));

    return (
        <ContentWrapper>
            <ContentHeader>
                <CssSans className="cssans__word">
                    <b className="cssans:P" />
                    <b className="cssans:r" />
                    <b className="cssans:a" />
                    <b className="cssans:c" />
                    <b className="cssans:t" />
                    <b className="cssans:i" />
                    <b className="cssans:c" />
                    <b className="cssans:e" />
                    <b className="cssans:W" />
                    <b className="cssans:e" />
                    <b className="cssans:b" />
                </CssSans>
            </ContentHeader>
            <ContentHeading>
                <h1>
                    1. TypeScript - <b>Practice</b>
                </h1>
                <h2>TypeScript의 연습과 개발 환경 구축</h2>
            </ContentHeading>
            <MainContentContainer>
                <MainContentArticle>
                    안녕하세요
                </MainContentArticle>
            </MainContentContainer>
        </ContentWrapper>
    );
}

const ContentWrapper = styled.div`
  background-color: #616db3;
  background-image: linear-gradient(142deg, #6188b3, #617bb3 31%, #616db3 65%, #6361b3);
  min-height: 100vh;
`;

const ContentHeader = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
  height: 69px;
  max-width: 1140px;
  margin: 0 auto;
  font-size: 10px;
  position: relative;
`;

const ContentHeading = styled.div`
  padding: 120px;
  max-width: 900px;
  margin: 0 auto;
  color: #f4f1ce;
  line-height: 1.2;
  text-align: center;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);

  & h1 {
    font-size: 28px !important;
    font-weight: 400 !important;
    font-family: "Montserrat", serif !important;
    margin: 0;
  }

  & h1 b {
    font-weight: 500 !important;
    font-style: normal !important;
  }

  & h2 {
    font-size: 48px !important;
    font-weight: 300 !important;
    font-style: normal;
    margin: 20px 0px;
  }
`;

const CssSans = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  font-size: 10px;
  letter-spacing: -1.5px;
  transform: translate3D(0, -50%, 0);
`;

const MainContentContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;  
`;

const MainContentArticle = styled.article`
  font-size: 1rem;
  padding: 60px;
  min-height: 100vh;
  border-radius: 3px 3px 0 0;
  background-color: #f4f1ce;
`;

export default App;