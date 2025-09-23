const numbers4 = [1, 2, 3, 4, 5];

// 각 원소에 + 1을 한 결과를 출력
numbers4.forEach((매개변수) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  console.log(매개변수 + 1);
});

console.log("---");

// 각 원소를 2로 나눴을 때 나머지가 0인 원소만 출력
numbers4.forEach((매개변수) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  if (매개변수 % 2 === 0) {
    console.log(매개변수);
  }
});

// ---
console.log("---");

// 각 원소에 + 1을 한 결과를 모아서 새로운 배열

// 빈 새로운 배열
const newArray = [];

numbers4.forEach((element) => {
  // 새로운 배열에 + 1을 저장
  newArray.push(element + 1);
});

console.log(newArray); // [ 2, 3, 4, 5, 6 ]
// ---
console.log("---");

// map() 활용
// map() 을 활용해서 원소 +1 를 한 데이터를 모은 새로운 배열 생성
const newArray2 = numbers4.map((element) => {
  // 반환값: 원소 + 1
  return element + 1;
});
console.log(newArray2); // [ 2, 3, 4, 5, 6 ]

// ---
// map() 을 활용해서 원소 * 2 를 한 데이터를 모은 새로운 배열 생성
// const newArray3 = numbers5.map((element) => {
//   return element * 2;
// });

const numbers6 = [1, 2, 3, 4, 5, 6];

// 원소 중 짝수만 모아서 반환

// map() + 내부 로직 조건문(if)
console.log(
  numbers6.map((element) => {
    if (element % 2 === 0) {
      return element;
    } else {
      return undefined;
    }
  })
);
/**
 * [ undefined, 2, undefined, 4, undefined, 6]
 */

console.log("----");

// filter
console.log(
  numbers6.filter((element) => {
    if (element % 2 === 0) {
      return true;
    }
  })
);
// [ 2, 4, 6 ]

// ---

const numbers7 = [1, 2, 3, 4, 5, 6];

// 원소 중 짝수인 경우 원소 + 1 모아서 반환

// map() + 내부 로직 조건문(if)
console.log(
  numbers7.map((element) => {
    if (element % 2 === 0) {
      return element + 1;
    }
  })
);
/*
[ undefined, 3, undefined, 5, undefined, 7]
*/
console.log("---");

// filter()
console.log(
  numbers7.filter((element) => {
    if (element % 2 === 0) {
      return true;
    }
  })
);
// [ 2, 4, 6 ]

const newArray4 = [];
numbers7.forEach((element) => {
  if (element % 2 === 0) {
    newArray4.push(element + 1);
  }
});
console.log(newArray4);
// [ 3, 5, 7 ]

// 1. 원소 중 짝수인 경우만 모아서 새로운 배열을 만든다. filter()
// 2. 새로운 배열의 원소 + 1 모아서 새로운 배열을 만든다. map()

// reduce()
// 배열의 누적을 반환
const numbers10 = [1, 2, 3, 4, 5];

const result = numbers10.reduce((accValue, currElement) => {
  // accValue : 이전 반복동안 반환된 값을 누적한 데이터
  // currElement : 현재 원소

  // 반환값들이 누적된다.
  return accValue + currElement;
  // accValue + currElement
  // ------------
  // 0        + currElement(1) , =>  accValue = 1
  // 1        + currElement(2) , =>  accValue = 3
  // 3        + currElement(3) , =>  accValue = 6
  // 6        + currElement(4) , =>  accValue = 10
  // 10       + currElement(5) , =>  accValue = 15
}, 0);

console.log(result); // 15

// sort()
// 배열을 정렬하는 고차 메서드
// 원소를 2개씩 비교하며 정렬

const numbers11 = [2, 6, 1, 9, 7];

// a b
// 2 6

numbers11.sort((a, b) => {
  // 정렬 규칙
  // 반환값이 양수라면 a가 뒤로 배치
  // 반환값이 음수라면 a가 앞으로 배치
  // 반환값이 0이라면 같다

  // 오름차순 축약
  return a - b;

  // 내림차순 축약
  return b - a;

  // 오름차순
  if (a < b) {
    return -1;
  }
  if (b < a) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
});
console.log(numbers11); // [ 1, 2, 6, 7, 9 ]


console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
console.log("코드를 실행")
