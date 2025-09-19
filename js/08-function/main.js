// 두 숫자를 매개변수로 받아서 더한 숫자를 반환하는 함수

// 함수 선언을 function 키워드로 시작

// 매개변수가 3개인 함수
function add(number1, number2, number3) {
  return number1 + number2 + number3;
}

// 함수의 호출
// 함수에 전달하는 데이터를 인자(argument)라고 함
const result1 = add(2, 3, 4); // 9

const n1 = 1;
const n2 = 2;
const n3 = 3;
const result2 = add(n1, n2, n3);

console.log(result1);
console.log(result2); // 6

function determine(number) {
  if (number < 0) {
    console.log("음수");
  } else if (number === 0) {
    console.log("0");
  } else {
    console.log("양수");
  }
}

const determein = number => {
  if (number < 0) {
    console.log("음수");
  } else if (number === 0) {
    console.log("0");
  } else {
    console.log("양수");
  }
};
