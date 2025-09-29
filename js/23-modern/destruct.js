const object = {
  name: "홍길동",
  age: 30,
  name2: "김철수",
  age2: 25,
};

// 구조 분해 할당 하지 않은 경우
// let name = object.name;
// let age = object.age;

// 구조분해 할당을 활용
let { name, age } = object;
console.log(name, age);
