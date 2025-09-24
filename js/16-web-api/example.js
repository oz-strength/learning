// import axios from "axios";

// // 도메인주소
// const BASE_URL = "https://dummyjson.com";

// // async 화살표 함수
// const testRoute = async () => {
//   /*
//   fetch('https://dummyjson.com/test')
//   .then(res => res.json())
//   .then(data => console.log(data));
//   */
//   const data = await axios.get(`${BASE_URL}/test`);
//   console.log(data["data"]);
//   // { status: 'ok', method: 'GET' }
// };
// // testRoute();

// async function getAllProducts() {
//   const response = await axios.get(`${BASE_URL}/products`);
//   const data = response["data"];
//   const products = data["products"];
//   console.log(products);
// }

// // getAllProducts();

// async function getProductById(n) {
//   const res = await axios.get(`${BASE_URL}/products/${n}`);
//   console.log(res);
// }

// getProductById(1);
// // getProductById(2);
// // getProductById(10);

fetch("https://dummyjson.com/recipes/tag/Beef")
  .then((res) => res.json())
  .then(console.log);
