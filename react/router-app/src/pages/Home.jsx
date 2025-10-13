import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>홈페이지</h1>
      <Link to="/">홈</Link>
      <br />
      <Link to="/about">소개</Link>
      <br />
      <Link to="/profile">사용자정보</Link>
    </>
  );
}
