import Card from "./Card";

export default function CardContainer() {
  // 함수 정의
  function handleClick(user) {
    console.log(user);
  }

  const user = {
    name: "홍길동",
    age: 20,
  };

  return (
    <>
      {/* 함수 Props 전달 */}
      <Card onClick={handleClick} user={user} />
    </>
  );
}
