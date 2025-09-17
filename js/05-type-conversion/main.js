// 형 변환
// 명시적 형 변환 : 개발자가 한 것
// 암시적 형 변환 : JS 엔진(번역기)가 자동으로 한 것

// 문자열로의 명시적 변환
// String() 함수 : 문자열로 변환하는 도구
// 함수 : 프로그래밍 언어의 특정 기능을 수행하는 도구

// String(데이터) / String(변수)
console.log(String(123)); // "123"
console.log(String(123) === "123"); // true

// true, undefined, null 문자열로 형변환 코드 작성
console.log(String(true)); // "true"
console.log(String(undefined));
console.log(String(null)); // "null"

// 숫자로의 명시적 변환
// Number() 함수 : 숫자형으로 변환하는 도구

// 문자열 "123"을 숫자 123으로 변환
console.log(Number("123")); // 123
console.log(Number("123") === 123); // true

console.log("==============================");
// 불리언 명시적 형 변환
// 불리언 데이터 : true, false
// Boolean() 함수 : 불리언으로 변환하는 도구

// 각 자료형마다 최소 1개는 거짓(falsy)으로 변환되는 값이 존재
// false가 아닌 데이터는 모두 true로 변환

// 0을 제외한 모든 숫자는 true로 변환
console.log(Boolean(0)); // false
// 빈 문자열 : 길이가 0인 문자열
console.log(Boolean("")); // false
// null : 값이 없음(빈 값)
console.log(Boolean(null)); // false
// undefined : 값이 할당되지 않은 상태
console.log(Boolean(undefined)); // false
// NaN : Not a Number(숫자가 아님)
console.log(Boolean(NaN)); // false

console.log("==============================");
// 암시적 불리언 형 변환
// 불리언 데이터가 아닌 데이터에 대한 논리적 연산(&&, ||, !) 수행 시

// 0 --불리언 형변환--> false --not연산---> true
console.log(!0); // true
console.log(!""); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true

// 정확한 논리연산자 작동 방식
// AND 연산자(&&) : 2 개의 데이터가 모두 true인 데이터라면 오른쪽 데이터를 생성
// true && true
console.log(1 && 2); // 2
// false && true
console.log(0 && 10); // 0
// true && false
console.log(10 && 0); // 0

// OR 연산자(||) : 왼쪽 데이터가 true라면 왼쪽 데이터를 생성
// 왼쪽 데이터가 false라면 오른쪽 데이터를 생성

// true || false
console.log(10 || 0); // 10
// false || false
console.log(0 || ""); // ""
// false || true
console.log("" || 10); // 10
