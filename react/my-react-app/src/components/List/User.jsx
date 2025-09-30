export default function User({ user }) {
  return (
    <>
      <li>
        {user.id} : {user.name}
      </li>
    </>
  );
}
