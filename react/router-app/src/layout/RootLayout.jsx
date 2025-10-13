import { Link } from "react-router-dom";

// Outlet 컴포넌트는 중첩된 자식 경로의 컴포넌트를 보여주는 역할
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <h1>RootLayout Component</h1>
      <div className="flex gap-4 p-2 border-2 border-gray-300">
        <Link to="/">홈페이지</Link>
        <br />
        <Link to="/about">소개페이지</Link>
        <br />
        <Link to="/profile">사용자 정보페이지</Link>
        <br />
        <Link to="/auth">인증페이지</Link>
      </div>
      <Outlet />
    </>
  );
}
