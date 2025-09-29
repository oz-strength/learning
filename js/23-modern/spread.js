// 스프레드 연산자 활용한 복사
// 스프레드 연산자로 새로운 배열 생성후 arr3에 할당
let arr1 = [1, 2, 3];
let arr3 = [...arr1];
arr3[0] = -1;
console.log(arr1); // [1, 2, 3]
console.log(arr3); // [-1, 2, 3]

// 리액트에서 스프레드 연산자 사용법
objectArr = [{ name: "철수", age: 10 }];

// 배열에 새로운 객체 추가
// 새로운 배열로 생성
const newObjectArr = [...objectArr, { name: "영희", age: 9 }];
console.log(newObjectArr);
console.log(objectArr);

