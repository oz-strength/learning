// if 조건문의 기본 구조

// 여러줄 주석 : /* */
/*
if(조건식) {
  // 조건식이 true 일 때 실행할 코드
}
*/
if (5 > 1) {
  console.log("5는 1보다 크다.");
}

/* if ~ else if 조건문 기본 구조
if(조건식1) {
  //* 조건식1이 true 일 때 실행할 코드
} else if(조건식2) {
  //* 조건식2는 조건식1이 false 일 때 평가 된다
  //* 조건식1이 false 이고, 조건식2가 true 일 때 실행할 코드
} 
 */
if (5 < 1) {
  console.log("5는 1보다 작다.");
} else if (5 === 5) {
  console.log("5는 5와 같다.");
}

// if ~ else if ~ else 조건문 기본 구조
/*
if(조건식1) {
  //* 조건식1이 true 일 때 실행할 코드
} else if(조건식2) {
  //* 조건식2는 조건식1이 false 일 때 평가 된다
  //* 조건식1이 false 이고, 조건식2가 true 일 때 실행할 코드
} else {
  //* 위의 모든 조건식이 false 일 때 실행할 코드
}
*/

// 변수 number를 선언하고 숫자 1을 할당
let number = 1;

// number가 0보다 크면 "양수", 0보다 작으면 "음수"
// if, else 조건문을 사용하여 구현
if (number > 0) {
  console.log("양수");
} else {
  console.log("음수");
}

// 변수 number2를 선언하고 0을 할당
// 변수 number2가 0보다 크면 "양수", 0보다 작으면 "음수", 0이면 "0" 출력
let number2 = 0;

if (number2 > 0) {
  console.log("양수");
} else if (number2 < 0) {
  console.log("음수");
} else {
  console.log("0");
}

// 중첩 조건문
// 조건문 내부에 또 다른 조건문이 포함된 형태

// 변수 score를 선언하고, 숫자 75를 할당한다
// 만약 변수 socre가 90 이상이라면
// 그런데 만약 변수 score가 90 미만 그리고(&&), 80 이상이라면
// 그런데 만약 변수 score가 80 미만 그리고(&&), 70 이상이라면
// 그런데 만약 변수 score가 70 미만 그리고(&&), 60 이상이라면
// 그런데 모두 아니라면
let score = 75;

if (score >= 90) {
  console.log("A학점");
} else if (score >= 80) {
  console.log("B학점");
} else if (score >= 70) {
  console.log("C학점");
} else if (score >= 60) {
  console.log("D학점");
} else {
  console.log("F학점");
}

// 삼항 연산자 표현식
// 표현식 : 데이터를 생성하는 코드

// 조건식은 무조건 참(true) 또는 거짓(false)으로 평가되는 식
// 조건식 ? 참일 때 실행할 표현식 : 거짓일 때 실행할 표현식
const message = 2 > 1 ? "2는 1보다 크다." : "2는 1보다 작다.";
console.log(message);

// 사용자의 로그인 여부
let isLogin = true;
const user = isLogin ? "사용자님 환영합니다." : "로그인 해주세요.";