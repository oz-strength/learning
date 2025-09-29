function func() {
  console.log("함수");
  console.log(this);
}

// func(); // window

const obj = {
  name: "홍길동",
  age: 20,
  func: function () {
    console.log("메서드");
    console.log(this);
  },
};

// obj.func();

const user2 = {
  name: "김철수",
  age: 30,
  func: () => {
    console.log(this);
  },
};

// user2.func();

const user3 = {
  name: "김민수",
  age: 30,
  greet: function () {
    const arrowFunc = () => {
      console.log(this);
    };
    arrowFunc();
  },
};
user3.greet();
