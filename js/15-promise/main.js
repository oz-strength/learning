// Promise 생성자 함수를 직접 사용하는 방법
// new Promise() : 생성자 함수
// (resolve, reject) => {} : 비동기 작업을 수행하고, 결과를 반환하는 함수

// const randomPromise = new Promise((resolve, reject) => {
//   // 비동기 작업 흉내
//   setTimeout(() => {
//     const random = Math.random(); // 랜덤 숫자 생성

//     if (random > 0.5) {
//       resolve("숫자가 0.5 이상! 성공"); // 성공 시  반환
//     } else {
//       reject("숫자가 0.5 이하! 실패"); // 실패 시  반환
//     }
//   }, 2000);
// });

// Promise 두 가지 상태
// 비동기 처리의 성공과 실패
// 예시) 네트워크 통신의 성공과 실패

// 성공 상태일 때 수행할 처리 메서드
// Promise데이터.then(콜백함수)

// 실패 상태일 때 수행할 처리 메서드
// Promise데이터.catch(콜백함수)

// 콜백함수는 매개변수를 하나 받는다
// randomPromise
//   .then((data) => {
//     // data는 resolve() 함수의 인자 데이터
//     console.log(data);
//   })
//   .catch((error) => {
//     // error는 reject() 함수의 인자 데이터
//     console.log(error);
//   });

// async/await
// Promise 자료형을 쉽게 사용하게 도와주는 키워드

// async 키워드
// 함수앞에 붙는 키워드.
// 해당 함수가 비동기를 처리하는 함수란것을 표시

function randomPromiseFunction(second) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${second}초 후 성공`); // 성공 시  반환
    }, 1000 * second);
  });
}

async function func() {
  try {
    console.time("순차");

    const result1 = await randomPromiseFunction(1); // 1초
    console.log(result1);

    const result2 = await randomPromiseFunction(5); // 1 + 2초
    console.log(result2);

    const result3 = await randomPromiseFunction(1); // 1 + 2 + 1초
    console.log(result3);

    console.timeEnd("순차");
  } catch (error) {
    console.log(error);
  }
}

async function parallelFunc() {
  try {
    console.time("병렬");
    const [result1, result2, result3] = await Promise.all([
      randomPromiseFunction(1),
      randomPromiseFunction(5),
      randomPromiseFunction(1),
    ]);
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.timeEnd("병렬");
  } catch (error) {
    console.log(error);
  }
}
// func();
parallelFunc();
