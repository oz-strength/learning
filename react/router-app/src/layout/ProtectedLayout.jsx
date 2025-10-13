// 비로그인 사용자는 로그인 페이지로 리다이렉트
import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedLayout() {
  const isLogin = false; // 로그인 상태 (true: 로그인, false: 비로그인)

  // 로그인 상태가 아니라면 로그인 페이지(/auth/login)로 리다이렉트
  if (!isLogin) {
    return <Navigate to="/auth/login" replace={true} />;
  }

  return (
    <>
      <h1>ProtectedLayout Component</h1>
      <Outlet />
    </>
  );
}
