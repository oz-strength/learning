export default function Profile({ user }) {
  return (
    <>
      저는 {user.name}이고, {user.age}세 입니다.
    </>
  );
}
