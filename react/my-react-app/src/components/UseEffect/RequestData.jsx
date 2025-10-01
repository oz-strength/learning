import { useEffect, useState } from "react";
import Product from "./Product";

// 컴포넌트가 첫 렌더링될때 DummyJSON 데이터를 받아와서 화면에 출력
export default function RequestData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      setProducts(json.products);
    }
    fetchData();
  }, []); // 빈 배열을 넣어줘야 처음에만 콜백함수가 실행됨
  console.log(products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map(product => {
        return <Product key={product.id} product={product}></Product>;
      })}
    </div>
  );
}
