export default function Card({ onClick, user }) {
  return (
    <>
      <button
        onClick={() => {
          //props로 전달된 user를 매개변수로 전달
          onClick(user);
        }}></button>

      <button onClick={() => onClick(user)}>
        이름: {user.name}, 나이: {user.age}
      </button>
    </>
  );
}
