import Child from "./Child";

export default function Parent() {
  return (
    <>
      {/* 데이터(props)를 전달하는 방법 */}
      <Child name="홍길동" age={30} />
      <Child name="이순신" age={40} />
      <Child name="강감찬" age={50} />
    </>
  );
}
