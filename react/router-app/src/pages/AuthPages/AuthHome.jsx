import { Link } from "react-router-dom";
export default function AuthHome() {
  return (
    <>
      <h1>AuthHome Component</h1>
      <div>
        <Link to="login">Login</Link>
        <br />
        <Link to="signup">Signup</Link>
      </div>
    </>
  );
}
