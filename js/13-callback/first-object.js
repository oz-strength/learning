// 함수 선언식
function 함수명() {}

// 일급 객체
// 1. 변수에 할당

// 함수 표현식
// 함수명이 없고, 대신에
// 변수에 할당
const functionExpression = function () {};

// 화살표 함수
// 함수명이 없고, 대신에
// 변수에 할당
const functionArray = () => {};

// 일급 객체
// 2. 함수의 반환값으로 사용 가능하다

function calculator(operator) {
  // 화살표 함수를 할당받은 변수 add
  // 1. 변수에 할당이 가능하다
  const add = (n1, n2) => {
    return n1 + n2;
  };

  if (operator === "더하기") {
    // 화살표 함수를 반환값으로 지정
    // 2. 함수의 반환값으로 사용 가능하다
    return add;
  }
}

// 일급 객체
// 3. 함수의 인자로 전달

// calculator2
// 특정 연산을 수행하고, 결과를 출력하는 함수
function calculator2(operatorFunction, n1, n2) {
  // 연산 함수를 수행
  const result = operatorFunction(n1, n2);

  // 연산 함수의 결과를 출력
  // 아래에 수십 수백 줄 코드
  console.log(`연산 결과 : ${result}`);
}

// 더하기 연산 함수
const add = (a, b) => {
  return a + b;
};

// 뺴기 연산 함수
const sub = (a, b) => {
  return a - b;
};

// 곱하기 연산 함수
const multi = (a, b) => {
  return a - b;
};

// 곱하기 연산 함수
const devid = (a, b) => {
  return a - b;
};

calculator2(add, 1, 2);
calculator2(sub, 1, 2);

// 더하기 연산을 수행하고, 결과를 출력하는 함수
function addLog(a, b) {}

// 뺴기 연산을 수행하고, 결과를 출력하는 함수
function subLog(a, b) {}

// 곱하기 연산을 수행하고, 결과를 출력하는 함수
function multiLog(a, b) {}

// 나누기 연산을 수행하고, 결과를 출력하는 함수
function devideLog(a, b) {}

// 비유

function 파스타_만들기(면준비하기, 소스_준비하기) {
  // 어떤 면을 쓰고, 얼마나 삶을것이냐?
  면준비하기();

  소스_준비하기();
}

function 스파게티면_준비하기() {}
function 푸실리면_준비하기() {}
function 토마토소스() {}
function 크림소스() {}

파스타_만들기(스파게티면_준비하기, 토마토소스());
파스타_만들기(푸실리면_준비하기, 토마토소스());

function 스파게티면과토마토소스_만들기() {
  스파게티면_준비하기(); // 콜백 함수 X
  토마토소스(); // 콜백 함수 X
}

function 스파게티면과크림소스_만들기() {
  스파게티면_준비하기();
  크림소스();
}

function 푸실리면으로_만들기() {
  푸실리면_준비하기();
}
