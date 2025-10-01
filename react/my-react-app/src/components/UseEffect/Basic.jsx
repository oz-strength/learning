import { useEffect, useState } from "react";

export default function Basic() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    // 콜백 함수
    // api 호출, 이벤트 등록, 타이머 설정 ... (부수 효과)
    // 화면이 처음 렌더링 될 때

    console.log("의존성 배열이 없는 useEffect");

    // 정리함수
    return () => {
      console.log("정리함수 호출");
    };
  });

  useEffect(() => {
    // 화면이 처음 렌더링 될 때
    console.log("빈 배열 의존성 배열이 있는 useEffect");
  }, []);

  useEffect(() => {
    // number 값이 변경될 때마다
    console.log("number가 변경될 때마다 실행되는 useEffect");
  }, [number]);

  useEffect(() => {
    // number 값이 변경될 때마다
    console.log("number2가 변경될 때마다 실행되는 useEffect");
  }, [number2]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <button
          className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 active:scale-95 cursor-pointer select-none transition"
          onClick={() => setNumber(number + 1)}>
          {number}
        </button>
        <button
          className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 active:scale-95 cursor-pointer select-none transition"
          onClick={() => setNumber2(number2 + 1)}>
          {number2}
        </button>
      </div>
    </>
  );
}
