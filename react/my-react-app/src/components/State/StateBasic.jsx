import { useState } from "react";

export default function StateBasic() {
  // const [string, setString] = useState("Hello, React!");

  const [array, setArray] = useState([1, 2, 3]);

  function handleClick() {
    // 배열에 원소 추가
    setArray([...array, array.length + 1]);
  }
  return (
    <>
      <button
        className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium 
             hover:bg-blue-700 active:scale-95 
             transition-colors duration-200"
        onClick={handleClick}>
        원소 추가
      </button>
      {array.map(item => {
        return <li key={item}>{item}</li>;
      })}
    </>
  );
}
