console.log("hello JS");

// 주석은 //
// Ctrl + / : 주석 생성

// 자료형 확인 키워드(예약어)
// typeof [확인하는 데이터]
console.log(typeof "hello"); // string

// 개발 입문자라면 데이터의 자료형을 자주 확인하는 습관 필요

// 원시 자료형 5개(원래는 7개)
// 1. 문자열(string)
// 문자들의 나열 : 0개 이상의 문자를 나타내는 자료형
// 빈 문자열("")도 문자열
console.log(typeof ""); // string

// 문자열 표현 방법 3개
// 큰 따옴표(""), 작은 따옴표(''), 백틱(``)

// 숫자형(number)
// 모든 종류의 숫자(정수, 0, 실수)
console.log(typeof 123); // number
console.log(typeof 3.14); // number
console.log(typeof -123); // number
console.log(typeof 0); // number

// 논리형, 불리언(boolean)
// true, false
console.log(typeof true); // boolean
console.log(typeof false); // boolean

// undefined
// 값이 할당되지 않은 상태
// 변수에 데이터가 없다를 표현
// 개발자가 의도하지 않은 비어있음을 표현
let x;
console.log(typeof x); // undefined

// null
// 값이 비어있음을 명시적으로 나타내는 값
// 개발자가 의도적으로 비어있음을 표현
console.log(typeof null); // object (자바스크립트 초창기 버전의 버그)
