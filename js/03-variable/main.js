// 변수에 데이터를 할당(assign O, save X)
// 변수명 = 할당할 데이터
// "Hello World!" 라는 문자열 데이터를 message 변수에 할당
message = "Hello World!";

// = : 할당 연산자
console.log(message);
console.log(message);
console.log(message);

// 변수 message2 선언
// 선언과 할당은 분리 가능
let message2;

// 선언의 방식 2개(원래는 3개)
// let, const

// let
// 데이터의 재할당 가능
// 변수 messages3에 "Hello variable" 문자열 데이터 할당
let messages3 = "Hello variable";

// 변수 messages3에 "Hello let variable" 문자열 데이터 재할당
messages3 = "Hello let variable";
console.log(messages3);
// let 키워드는 재선언 불가능

// let 변수 message4 선언
let message4;
// 재선언 불가능
// let message4;

// const
// 데이터의 재할당이 불가능(중요) - 상수라고 개발에서 표현
// const 변수 message5 선언과 동시에 "Hello const variable" 문자열 데이터 할당
const message5 = "Hello const variable";
console.log(message5);
// 재할당 불가능
// message5 = "Hello const variable 재할당";

// let vs const
// let : 변하는 데이터를 저장하는 변수 선언 방식
// const : 변하지 않는 데이터를 저장하는 변수 선언 방식

// 대소문자 구분하기 때문에 두 변수는 다른변수
let message;
let Message;

// 카멜 케이스 적용전
let hellomessage;
// 카멜 케이스 적용후
let helloMessage;

// 템플릿 리터럴
// 문자열 사이에 변수를 삽입해서 문자열을 생성하는 방법
// 1. 문자열을 백틱으로 표현
// 2. ${변수명} 형태로 변수 삽입
let name = "홍길동";
let greet = "안녕하세요 ${name} 입니다.";
console.log(greet); // 안녕하세요 ${name} 입니다.
