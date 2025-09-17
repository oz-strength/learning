// 논리연산자
// 논리형을(불리언형, true/false) 기반으로 한 연산자
const trueData = true;
const falseData = false;
// &&(AND), ||(OR), !(NOT)

// &&(AND) 연산자: 두 개의 논리형 데이터가 참이면 참(true) 생성, 하나라도 거짓이면 거짓(false) 생성
// 템플릿 리터럴에는 변수뿐만 아니라 표현식을 삽입 가능
// 표현식 : 데이터를 생성하는 코드
console.log(`true && true: ${trueData && trueData}`); // true

// flase && true
console.log(`false && true: ${falseData && trueData}`); // false

// || (OR) 연산자: 두 개의 논리형 데이터 중 하나라도 참이면 참(true) 생성, 둘 다 거짓이면 거짓(false) 생성
// true || false
console.log(`true || false: ${trueData || falseData}`); // true
// false || false
console.log(`false || false: ${falseData || falseData}`); // false

// !(NOT) 연산자: 1개의 논리형 데이터만 필요. 참이면 거짓 생성, 거짓이면 참 생성
console.log(`!true: ${!trueData}`); // false
console.log(`!false: ${!falseData}`); // true
