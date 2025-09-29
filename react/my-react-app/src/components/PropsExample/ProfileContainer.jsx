import Profile from "./Profile";

export default function ProfileContainer() {
  const user = {
    name: "현우",
    age: 22,
    isAdmin: true,
  };
  return (
    <>
      <Profile user={user} />
    </>
  );
}
