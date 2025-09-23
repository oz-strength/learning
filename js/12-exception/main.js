// 예외처리

try {
  // try 코드 블록
  // 원래 실행할 코드

  // 오류가 발생할만한 코드를 작성
  console.log(number);
} catch (error) {
  // catch 코드 블록
  // try 코드 블록이 오류가 발생할 때 실행할 코드

  // error 매개변수
  // 오류의 정보를 저장하고 있는 객체
  console.log(error.name); // 에러의 종류
  console.log(error.message); // 에러의 메세지
} finally {
  // finally 코드 블록
  // try ~ catch와 상관없이
  // 무조건 실행되는 코드
  console.log("무조건 실행되는 코드 1");
}

console.log("무조건 실행되는 코드 2");

function errorFunction() {
  try {
    console.log(number);

    return true; // return은 함수 실행을 종료한다
  } catch (error) {
    console.log(error.message);

    return false; // return은 함수 실행을 종료한다
  } finally {
    // finally는 return에 의해서
    // 함수가 종료돼도 무조건 실행된다
    console.log("무조건 실행되는 코드? 1"); // 실행 O
  }

  // return에 의해서 함수가 종료되면
  // 실행 X
  console.log("무조건 실행되는 코드? 2"); // 실행 X
}

const result = errorFunction();
// console.log(result);
