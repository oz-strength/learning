import User from "./User";

export default function Container() {
  // const array = [1, 2, 3, 4, 5];
  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
  ];
  return (
    <>
      {userArray.map(user => {
        return <User key={user.id} user={user}></User>;
      })}
    </>
  );
}
