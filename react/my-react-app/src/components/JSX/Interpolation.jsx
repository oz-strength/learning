export default function Interpolation() {
  const number = 10;

  function greet(name) {
    return <p>저는 {name}입니다.</p>;
  }
  return (
    <>
      <p>{1 + 1}</p>
      <p>{3 * 2}</p>
      <p>{1 === 1} </p>
      <p>{3 < 1}</p>
      <p>{number}</p>
      {greet("홍길동")}
    </>
  );
}
