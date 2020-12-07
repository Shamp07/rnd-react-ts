import React from 'react';
import styled from "styled-components";

const MainContent :React.FC = () => {
  // const student = new Student('Lee');
  // console.log(student.sayHello());
  // console.log(student.study());
  // console.log(person.name);
  // console.log(sum(2,3));

  // 변수 foo는 string 타입이다.
  let foo: string = 'hello';
  foo = '1'
  const a = multiply1(2,2);
  const b = multiply2(2,3);
  let n: undefined = undefined;
  let n2: null = null;

  if(!n2) { console.log('ㅎㅇ') }

  // array
  let list1: any[] = [1, 'two', true];
  let list2: number[] = [1, 2, 3];

  // 자바에서만 보던 제네릭을 자바스크립트에서 볼 줄은 몰랐다.
  let list3: Array<number> = [1, 2, 3]; // 제네릭 배열 타입

  // tuple : 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현
  // 해당 순서에 맞게 0 index: 문자열 1 index: 숫자 타입 length도 2로 고정.
  // let tuple: [string, number] = ['1']; //Error
  // tuple.push(1); //Error
  // tuple = ['hello', 10]; // OK
  // tuple = [10, 'hello']; // Error
  // tuple = ['hello', 10, 'world', 100]; // Error
  // tuple.push(true); // Error

  // any: 기존 자바스크립트의 일반적인 변수선언과 비슷한 느낌인듯 싶음.
  let notSure: any = 4;
  notSure = 'maybe a string instead';
  // console.log(notSure);
  notSure = false; // okay, definitely a boolean
  // console.log(notSure);

  // 자바스크립트에서도 Wrapper Class 타입이 존재함.
  // 이와 프리미티브(원시)형 타입은 별개로 (String, string) 타입은 이와같이 대소문자를 구별한다.
  let str: String = new String('1');
  // console.log(String);

  // Date 타입
  const today: Date = new Date();

// HTMLElement 타입
  const elem: HTMLElement | null = document.getElementById('myId');
  console.log(elem);

  class Person { }
// Person 타입
  const person: Person = new Person();


  // 굳이 타입을 지정하지 않더라도 타입스크립트에서는
  // 처음 초기화 시 동적으로 타입이 정해지며, 그 이후로는 동적 타이핑이 불가능해진다.
  // 즉 초기화와 선언을 동시에 하고 동적 타이핑을 사용하려면 무조건 any 타입을 써야하는것.
  // 하지만 변수 자체만 선언한다면 타입을 지정하지 않아도 any타입으로 자동으로 동작함.
  // 하지만 위와 같은 경우는 타입스크립트의 장점을 없애는 부분이기 때문에 사용하지 않는 것이 권장된다.
  let q;
  q = 'd';
  q = true;

  return (
    <MainContentArticle>
      TypeScript에서는 기존 JavaScript에서 지원하던 타입이외에도 추가적으로 타입을 지원한다.
      <br />
      (array: 기존 JavaScript에서는 array를 exotic object라 판별하는 반면 TypeScript에서는 따로 타입이 있는것으로 보여짐.
      <br />
      tuple, enum, any, void, never)
      {n2}
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

// never : 결코 발생하지 않는 값
// 문서를 더 찾아본결과 해당 및의 소스 결과처럼
// 리턴자체를 안하는 function 이거나, 무조건 Exception을 던진다거나 할때 사용되는 것 으로 보임.
// 조금 더 문서를 찾아보는게 좋을 듯 싶음.
function infiniteLoop(): never {
  while(true) {}
}

// function sum(a: number, b: number): number {
//   return a + b;
// }

const sum = (a: number, b: number): number => {
  return a + b;
}

// 함수선언식
function multiply1(x: number, y: number): number {
  return x * y;
}

// 함수표현식
const multiply2 = (x: number, y: number): number => x * y;



